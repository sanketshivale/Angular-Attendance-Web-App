import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  //FORMS
  registrationForm: FormGroup;

  //PIPES
  message: string = '';

  //OBJECTS
  attendees: any[] = [];

  user = {
    firstName: '',
    lastName: '',
    email: '',
    collegeName: '',
    phone: '',
    gender: ''
  };

  ngOnInit(): void {
    this.reloadData();
  }

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
  

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      collegeName: ['', [Validators.required]],
      phone: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6789]{1}[0-9]{9}')],
      gender: ['male', Validators.required]
    });
  }

  reloadData() {
    this.registrationService.getAttendees().subscribe(
      (res: any) => {
        console.log('res', res)
        this.attendees = res.attendances;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  onSubmitForm() {
    this.registrationService.saveUser(this.registrationForm.value).subscribe(
      (res: any) => {
        this.message = res.message;
        this.registrationForm.reset();
        this.reloadData();
      }),
      (err: any) => {
        console.log(err);
        this.message = "Error in registration";
      }    


  }

}

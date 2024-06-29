import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private fb = inject(FormBuilder);
  emailForm = this.fb.group({
    email: ['', Validators.email],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  get controls() {
    return this.emailForm.controls;
  }
  sendEmail() {
    if (this.emailForm.invalid) {
      return;
    }
    const emailFields = {
      email: this.emailForm.value.email,
      subject: this.emailForm.value.subject,
      message: this.emailForm.value.message,
    };
    emailjs
      .send(
        'service_zetfz38',
        'template_lmrkstr',
        emailFields,
        'mafVUn2aNdA10JyJ0',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
          this.onContact();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
        },
      );
  }
  contact: boolean = false;
  onContact() {
    this.contact = !this.contact;
    this.emailForm.reset();
  }
}

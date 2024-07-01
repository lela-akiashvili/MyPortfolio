import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import emailjs from '@emailjs/browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private fb = inject(FormBuilder);
  emailForm = this.fb.group({
    email: ['', Validators.email],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
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
  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data) => {
      if (data) {
        this.jumpToSection(data);
      }
    });
  }
  jumpToSection(section: string) { 
     this.onContact();
    document.getElementById(section)!.scrollIntoView({ behavior: 'smooth' });
  
  }
}

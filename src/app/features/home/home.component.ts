import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

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
  get controls(){
    return this.emailForm.controls;
  }
  contact: boolean = false;
  onContact() {
    this.contact = !this.contact;
    this.emailForm.reset();
  }
}

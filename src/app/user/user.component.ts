import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Correct import for navigation
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  constructor(private router: Router) {}

  onSubmit(form: NgForm): void {
 
    console.log('Form Data:', form.value);
    this.router.navigate(['./schedule']);
  }
  
}

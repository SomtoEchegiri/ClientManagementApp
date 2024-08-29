import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Correct import for navigation

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})

export class StartComponent {
  @Output() userAuthenticated = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  authenticateUser(): void {
    this.router.navigate(['./user']);
    
  }
}

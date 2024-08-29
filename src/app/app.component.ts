import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartComponent } from "./start/start.component";
import { UserComponent } from "./user/user.component";
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { DoneComponent } from './done/done.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartComponent, UserComponent, CommonModule, ScheduleComponent, DoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  
  
}

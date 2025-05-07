import { Component } from '@angular/core';
import { Student1Component } from './student1/student1.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}

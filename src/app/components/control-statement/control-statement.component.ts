import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {


  div1Visible: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';

  cityList: string[] = [
    "Gandhinagar",
    "Ahmedabad",
    "Surat",
    "Mehsana",
    "Himmatnagar"
  ]

  hideShowDiv1(isShow: boolean){
    this.div1Visible = isShow;
  }

}

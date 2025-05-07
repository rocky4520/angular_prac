import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  imports: [FormsModule],
  templateUrl: './td-form.component.html',
  styleUrl: './td-form.component.css'
})
export class TdFormComponent {


  countryList = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "United Kingdom",
    "Japan",
    "Brazil",
    "China",
    "South Africa",
    "Italy",
    "Mexico",
    "Russia",
    "South Korea",
    "Spain",
    "Indonesia",
    "Saudi Arabia",
    "Argentina",
    "New Zealand"
]


handleSubmit(val:NgForm){
  console.log("Form Submitted !",val)
}

}

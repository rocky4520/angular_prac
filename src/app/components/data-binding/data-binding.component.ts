  import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Urva"
  rollNo: number = 19
  isActive: boolean = true
  currentDate: Date = new Date()
  myPlaceholder: string = "Enter Full Name"
  div1ClassName: string = "bg-primary"
  selectedCity: string = ""



  constructor(private router:Router){
    console.log(this.firstName)

    this.isActive = false
    console.log(this.isActive)
  }

  navigatetoAdmin(){
    this.router.navigateByUrl("/admin")
  }

  showWelcomeMessage(){
    alert("Welcome to angular 19 TUT")
  }

  onCityChange(){
    console.log("City Changed")
  }


}

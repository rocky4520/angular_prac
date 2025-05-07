import { Component } from '@angular/core';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Urva';

  constructor(private router:Router){}

  // navigateTo(path:string){
  //   this.router.navigate([path])
  // }

  selectedPath = '';
  selectedForm = '';

  onSelectionChange(){
    if(this.selectedPath){
      this.router.navigate([this.selectedPath])
    }
  }
  onSelectionForm(){
    if(this.selectedForm){
      this.router.navigate([this.selectedForm])
    }
  }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {


  firstName = signal("Urva")

  lastName = signal<string>("Patel")

  courseName = "Angular"

  rollNo = signal(0)

  constructor(){
    // const value = this.firstName();

    setTimeout(() => {
      this.courseName = "React Js"
      this.firstName.set("Rohan")
    }, 5000);
  }
  onIncrement(){
    this.rollNo.update(oldValue => oldValue+1)
  }

  onReset(){
    this.rollNo.update(value => value=0)
  }

}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Pune","Nagpur","Jaipur","Mumbai","Thane"]

  employeeArray: any[] = [
    {empId:121, name:'AAA', city: 'Pune', contactNo: '9898986565'},
    {empId:122, name:'BBB', city: 'Nagpur', contactNo: '4545453434'},
    {empId:123, name:'CCC', city: 'Jaipur', contactNo: '6565652323'},
    {empId:124, name:'DDD', city: 'Mumbai', contactNo: '9090909090'},
    {empId:125, name:'EEE', city: 'Thane', contactNo: '7878784545'}
  ]
}

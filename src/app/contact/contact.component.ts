import { Component, OnInit } from '@angular/core';

declare const sendEmail:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  onClick(){
    sendEmail();
     }
  constructor() { }

  ngOnInit(): void {
  }
  
 
}

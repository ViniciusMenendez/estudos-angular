import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName') name: string;
  @Input() lastname: string;
  @Input() age: number;

  clients : Client[]

  constructor() {
    this.clients = [
    {id:1, name: "bob", age:30},
    {id:1, name: "john", age:25},
    {id:1, name: "ana", age:19},
    {id:1, name: "maria", age:21}
   ];
  }
  ngOnInit() {
  }

}

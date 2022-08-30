import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() options!:Card
  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() options:Card = {
    title:'titulo',
    image:'LOGO-SOMOS MAS.png',
    description:'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et veritatis rerum ipsam consequuntur, eum tenetur neque velit debitis minus eius fuga autem voluptatem earum quia, est suscipit! Odio, unde!</p>'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

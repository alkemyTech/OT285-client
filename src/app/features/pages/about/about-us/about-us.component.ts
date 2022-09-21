import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title: string = 'Sobre Nosotros';  
  membersList: Card[] = [
    {
      title: 'Integrante',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageLeft: true
    },
    {
      title: 'Integrante',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      imageLeft: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

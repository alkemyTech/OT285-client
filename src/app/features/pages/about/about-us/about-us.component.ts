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
      title: 'Example',
      description: 'Lorem Ipsum',
      imageLeft: true
    },
    {
      title: 'ExampleN2',
      image: 'ex-imageN2',
      description: 'Lorem Ipsum Dolorem',
      imageLeft: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

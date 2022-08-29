import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  membersList: Card[] = [
    {
      title: 'Example',
      image: 'ex-image',
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

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() tittle!:string;
  @Input() image:string = 'https://images6.alphacoders.com/322/thumb-1920-322420.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

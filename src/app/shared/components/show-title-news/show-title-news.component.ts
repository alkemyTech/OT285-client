import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-title-news',
  templateUrl: './show-title-news.component.html',
  styleUrls: ['./show-title-news.component.scss']
})
export class ShowTitleNewsComponent implements OnInit {

  @Input() titulo!:string;
  @Input() imagen:string = 'https://images6.alphacoders.com/322/thumb-1920-322420.jpg';
  
  constructor() { } 

  ngOnInit(): void {
  }
}

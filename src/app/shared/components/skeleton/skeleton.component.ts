import { Component, Input, OnInit } from '@angular/core';

interface options{
  component:"card" | "cardImageLeft"
}

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  @Input() options!:options;

  constructor() { }

  ngOnInit(): void {
  }

}

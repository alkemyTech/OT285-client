import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-backoffice',
  templateUrl: './layout-backoffice.component.html',
  styleUrls: ['./layout-backoffice.component.scss']
})
export class LayoutBackofficeComponent implements OnInit {

  sidebar:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

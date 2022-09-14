import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() OpenCloseSidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSidebar() : void{
    this.OpenCloseSidebar.emit()
  }


}

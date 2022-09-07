import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MembersService } from '../members.service';
import { addItem, retrievedItemList } from './state/members.actions';
import { selectMembers } from './state/members.selectors';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.scss']
})
export class MemberslistComponent implements OnInit {

  listItems$: Observable<any> = new Observable()
  columns = ["Title", "Order", "Image", "Description", "Linkedin", "FacebookUrl", "Created_at"];
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(addItem())
    this.listItems$ = this.store.select(selectMembers) 
  }
}

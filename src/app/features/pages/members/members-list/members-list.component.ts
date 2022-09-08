import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Member } from 'src/app/core/models/member';
import { loadMembers } from '../state/actions/members-page.actions';
import { getError, getMembers } from '../state/members.reducers';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MemberslistComponent implements OnInit {
  members$!: Observable<Member[]>;
  errorMessage$!: Observable<string>;
  columns = ["Title", "Order", "Image", "Description", "Linkedin", "FacebookUrl", "Created_at"];
  
  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadMembers())
    this.members$ = this.store.select(getMembers) 
    this.errorMessage$ = this.store.select(getError)
  }
}

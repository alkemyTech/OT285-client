import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { arraysAreNotAllowedMsg } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { Member } from 'src/app/core/models/member';
import { MembersService } from '../members.service';
import { retrievedItemList } from './state/members.actions';
import { MemberRes } from './state/members.interface';
import { selectMembers } from './state/members.selectors';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.scss']
})
export class MemberslistComponent implements OnInit {

  listItems$: Observable<any> = new Observable()
  columns = ["Title", "Order", "Image", "Description", "Linkedin", "FacebookUrl", "Created_at"];
  
  

  constructor(private servicehttp:MembersService,
    private store:Store) { 
      this.listItems$ = this.store.select(selectMembers) 
    }

  ngOnInit(): void {
    this.getMembers2();
  }

  getMembers2(): void{
    this.servicehttp.getAllMembers().subscribe((res)=>{
      let parseLetter=JSON.stringify(res);
        let pareJson=JSON.parse(parseLetter);
      this.store.dispatch(retrievedItemList({items : pareJson.data}))
    })
  }

 

  

   
    

}
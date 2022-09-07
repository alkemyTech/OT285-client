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
  
  additem$: Observable<any> = new Observable();

  constructor(private servicehttp:MembersService,
    private store:Store) { 
      
    }

  ngOnInit(): void {
    //this.getMembers2();
    this.store.dispatch(addItem())
    this.listItems$ = this.store.select(selectMembers) 
    
    
  }

 /*  getMembers2(): void{
    this.servicehttp.getAllMembers().subscribe((res)=>{
      let parseLetter=JSON.stringify(res);
        let pareJson=JSON.parse(parseLetter);
        console.log(pareJson);
      this.store.dispatch(retrievedItemList({items : pareJson.data}))
    })
  }
 */
 

  

   
    

}

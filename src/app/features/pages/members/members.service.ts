import { Injectable } from '@angular/core';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  apiUrl = 'https://ongapi.alkemy.org/api/members';

  constructor(
    private apiService: PrivateApiServiceService
  ) {

  }

  getMembers(){
    this.apiService.get(this.apiUrl).subscribe((res)=>{
      console.log(res);
      
    })
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';

interface Member{
  id?: number
  name:	string
  image:	string
  description?:	string
  facebookUrl?:	string
  linkedinUrl?:	string
  created_at?:	string
  updated_at?:	string
  deleted_at?:	string
}
interface MembersRes{
  success:	boolean
  data:	Member[]
  message:	string
}
interface memberRes{
  success:	boolean
  data:	Member
  message:	string
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  route = 'members';

  constructor(
    private apiService: PrivateApiServiceService
  ) {}

  get(id?: number): Observable<memberRes>{
    return this.apiService.get(this.route, id)
  }
  post(data: Member): Observable<memberRes>{
    return this.apiService.post(this.route, data)
  }
  put(id: number, data: Member): Observable<memberRes>{
    return this.apiService.put(this.route, id, data);
  }
  delete(id: number): Observable<memberRes>{
    return this.apiService.delete(this.route, id);
  }

}

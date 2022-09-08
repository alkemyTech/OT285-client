import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member, MemberResponse } from "src/app/core/models/member";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";


@Injectable({
  providedIn: "root",
})
export class MembersService {
  route = "members";

  constructor(private apiService: PrivateApiServiceService) {}

  getMember(id?: number): Observable<MemberResponse> {
    return this.apiService.get(this.route, id);
  }
  getAllMembers(): Observable<any> {
    return this.apiService.get(this.route);
  }
  createMember(data: Member): Observable<MemberResponse> {
    return this.apiService.post(this.route, data);
  }
  updateMemberData(id: number, data: Member): Observable<MemberResponse> {
    return this.apiService.put(this.route, id, data);
  }
  deleteMember(id: number): Observable<MemberResponse> {
    return this.apiService.delete(this.route, id);
  }
}

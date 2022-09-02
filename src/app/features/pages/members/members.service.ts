import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/core/models/member";
import { PrivateApiServiceService } from "src/app/core/services/privateApiService.service";

interface MemberRes {
  success: boolean;
  data: Member[] | Member;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class MembersService {
  route = "members";

  constructor(private apiService: PrivateApiServiceService) {}

  getMember(id?: number): Observable<MemberRes> {
    return this.apiService.get(this.route, id);
  }
  getAllMembers(): Observable<MemberRes> {
    return this.apiService.get(this.route);
  }
  createMember(data: Member): Observable<MemberRes> {
    return this.apiService.post(this.route, data);
  }
  updateMemberData(id: number, data: Member): Observable<MemberRes> {
    return this.apiService.put(this.route, id, data);
  }
  deleteMember(id: number): Observable<MemberRes> {
    return this.apiService.delete(this.route, id);
  }
}

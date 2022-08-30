import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';

interface Activity {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  user_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  route:string = "activities";

  constructor(
    private PublicApiService: PublicApiServiceService,
    private PrivateApiService: PrivateApiServiceService
  ) { }

  getActivities(): Observable<any>{
    return this.PublicApiService.get(this.route)
  }

  getActivityById(id:number): Observable<any>{
    return this.PublicApiService.get(this.route, id)
  }

  createActivity(Activity:Activity): Observable<any>{
    return this.PrivateApiService.post(this.route, Activity)
  }

  updateActivity(Activity:Activity, ActivityId:number): Observable<any>{
    return this.PrivateApiService.put(this.route, ActivityId, Activity)
  }

  deleteActivity(ActivityId:number)/*: Observable<any>*/{
    // return this.PrivateApiService.delete('activities', ActivityId)
  }
}

import { Injectable } from '@angular/core';
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

  constructor(
    private PublicApiService: PublicApiServiceService,
    private PrivateApiService: PrivateApiServiceService
  ) { }

  getActivities(){
    return this.PublicApiService.get('activities')
  }

  getActivityById(id:number){
    return this.PublicApiService.get('activities', id)
  }

  postActivity(Activity:Activity){
    return this.PrivateApiService.post('activities', Activity)
  }

  patchActivity(Activity:Activity, ActivityId:string){
    // return this.PrivateApiService.patch('activities', Activity, ActivityId)
  }

  deleteActivity(){
  }
}

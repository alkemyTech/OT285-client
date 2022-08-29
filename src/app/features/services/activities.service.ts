import { Injectable } from '@angular/core';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';

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

  postActivity(){
  }

  putActivity(){
  }

  patchActivity(){
  }
}

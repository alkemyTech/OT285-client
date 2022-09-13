import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import * as tto from '@tomtom-international/web-sdk-services';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>(); 

  title: string = 'google-maps';
  map: any;
  currentLat: number = 0;
  currentLon: number = 0;

  query!: string;
  marker: any;
  lnglat?: {};

  constructor() { }

  ngOnInit(): void {
    this.initLocationMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          this.currentLon = position.coords.longitude;
          this.currentLat = position.coords.latitude;
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private initLocationMap(): void {

    this.map = tt.map({
      key: environment.tomtom.key,
      container: "map",
    });

    this.map.addControl(new tt.FullscreenControl());
    this.map.addControl(new tt.NavigationControl());

    this.getCurrentPosition().subscribe((position: any) => {
      this.map.flyTo({
        center: {
          lat: position.latitude,
          lng: position.longitude,
        },
        zoom: 13,
      });

      const popup = new tt.Popup({
        anchor: "bottom",
        offset: { bottom: [0, -40] },
      }).setHTML("Current Location");

      const marker = new tt.Marker()
        .setLngLat({
          lat: position.latitude,
          lng: position.longitude,
        })
        .addTo(this.map);
      marker.setPopup(popup).togglePopup();
    });
  }

  handleResults(query: tto.FuzzySearchResponse): tto.FuzzySearchResult[] | undefined{
    return query.results
  }

  search(){
    tto.services.fuzzySearch({
      key: environment.tomtom.key,
      query: this.query,
      boundingBox: this.map.getBounds()
    })
      .then((response) => {
        console.log(response)
        let location = this.handleResults(response);
        if (location) {
          let lnglat = location[0].position
          this.moveMap(lnglat)
          let markerJSON = JSON.stringify(lnglat)
          let marker = JSON.parse(markerJSON)
          this.lnglat = marker
          this.marker = new tt.Marker()
            .setLngLat(marker)
            .addTo(this.map)
                   
        }        
      })
  } 

  moveMap(lnglat: {} | undefined){
    this.map.flyTo({
      center: lnglat,
      zoom: 14
    })
  }

  addNewEvent(value:any){
    this.newItemEvent.emit(value)
  }

  print(){   
    console.log('value',this.lnglat)
    this.newItemEvent.emit(this.lnglat)
  }  
}
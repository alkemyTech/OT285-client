import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import * as tto from '@tomtom-international/web-sdk-services';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tomtom-maps',
  templateUrl: './tomtom-maps.component.html',
  styleUrls: ['./tomtom-maps.component.scss']
})

export class TomTomMapsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>(); 

  title: string = 'tomtom-maps';
  map: any;
  currentLat: number = 0;
  currentLon: number = 0;

  query!: string;
  marker!: tt.Marker;
  lngLat!: any;

  constructor() { }

  ngOnInit(): void {
    this.initLocationMap();
  }

  private getCurrentPosition<T>(): Observable<T> {
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

      this.moveMap({lat: position.latitude, lng: position.longitude});      
      const popup = this.addPopUp(position.latitude, position.longitude);
      this.marker = new tt.Marker({draggable: true})
        .setLngLat({
          lat: position.latitude,
          lng: position.longitude,
        })
        .addTo(this.map);
        this.lngLat = this.marker.getLngLat();
        this.marker.on('dragend', () => {
          this.lngLat = this.marker.getLngLat();
          popup.setHTML("Estas aquí: <br>" + "Lat: " + this.lngLat.lat.toFixed(4) + "<br>" + "Lng: " + this.lngLat.lng.toFixed(4));
          this.marker.setPopup(popup).togglePopup();
        });
        this.marker.setPopup(popup).togglePopup();
    });
  }

  addPopUp(lat:number, lng:number): any{
    const popup = new tt.Popup({
      anchor: "bottom",
      offset: { bottom: [0, -40] },
    }).setHTML("Estas aquí: <br>" + "Lat: " + lat.toFixed(4) + "<br>" + "Lng: " + lng.toFixed(4));
    return popup
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
        let location = this.handleResults(response);        
        if (location && location[0]) { 
          this.lngLat = location[0].position
          console.log('ver',this.lngLat)
          this.moveMap(this.lngLat)
          this.marker
            .remove()
            .setLngLat(this.lngLat)
            .addTo(this.map)      
          const popup = this.addPopUp(this.lngLat.lat, this.lngLat.lng)
          this.marker.setPopup(popup).togglePopup();
          this.lngLat = this.marker.getLngLat();   
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
    this.newItemEvent.emit(this.lngLat)
  }    
}
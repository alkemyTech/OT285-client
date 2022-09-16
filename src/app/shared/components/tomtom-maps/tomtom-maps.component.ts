import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import * as tts from '@tomtom-international/web-sdk-services';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-tomtom-maps',
  templateUrl: './tomtom-maps.component.html',
  styleUrls: ['./tomtom-maps.component.scss']
})

export class TomTomMapsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<tts.LatLng>(); 

  title: string = 'tomtom-maps';
  map!: any;
  currentLat: number = 0;
  currentLon: number = 0;

  query!: string;
  marker!: tt.Marker;
  lngLat!: tts.LatLng;

  private debounceTimer?: NodeJS.Timeout;

  constructor(private snackBarService: SnackBarService) { }

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

  onQueryChanged(query: string = ''): void{
    if ( this.debounceTimer) clearTimeout(this.debounceTimer);
    if (query.length>3){
    this.debounceTimer = setTimeout(() => {
      this.search();
    }, 1000)
    }
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
      const popup: tt.Popup = this.addPopUp(position.latitude, position.longitude);   
      this.createMarker(position, popup)
      this.marker.setPopup(popup).togglePopup();
      this.sendValue();
    });
  }

  createMarker(position:any, popup:tt.Popup): void {
    this.marker = new tt.Marker({draggable: true})
    .setLngLat({
      lat: position.latitude,
      lng: position.longitude,
    })
    .addTo(this.map);

    this.lngLat = this.marker.getLngLat();

    this.marker.on('dragend', () => {
      this.moveMarker(popup);
    });
  }

  moveMarker(popup:tt.Popup): void {
    this.lngLat = this.marker.getLngLat();
    if (this.lngLat.lat && this.lngLat.lng){
      popup.setHTML("Estas aquí: <br>" + "Lat: " + this.lngLat.lat.toFixed(4) + "<br>" + "Lng: " + this.lngLat.lng.toFixed(4));
    }
    this.marker.setPopup(popup).togglePopup();
    this.sendValue();
  }

  editMarker(lat:number, lng:number): void {
    this.marker
      .remove()
      .setLngLat({
        lat: lat,
        lng: lng,
      })
      .addTo(this.map)      
  }

  addPopUp(lat:number, lng:number): tt.Popup{
    const popup: tt.Popup = new tt.Popup({
      anchor: "bottom",
      offset: { bottom: [0, -40] },
    }).setHTML("Estas aquí: <br>" + "Lat: " + lat.toFixed(4) + "<br>" + "Lng: " + lng.toFixed(4));
    return popup
  }

  handleResults(query: tts.FuzzySearchResponse): void {
    let location: tts.FuzzySearchResult[] | undefined = query.results;
    if (location && location[0].position) { 
      this.lngLat = location[0].position
      this.moveMap(this.lngLat)
      if (this.lngLat.lat && this.lngLat.lng){
        this.editMarker(this.lngLat.lat, this.lngLat.lng);      
      const popup: tt.Popup = this.addPopUp(this.lngLat.lat, this.lngLat.lng)
      this.marker.setPopup(popup).togglePopup();
      this.sendValue()   
      }  
    }
  }

  search(): void{    
    tts.services.fuzzySearch({
      key: environment.tomtom.key,
      query: this.query,
      boundingBox: this.map.getBounds()
    })
    .then((response:tts.FuzzySearchResponse) => {
      try {               
        this.handleResults(response)
      } catch (error) {
      console.log("ERRRRRRRR")
      this.snackBarService.error("Ubicacion no encontrada, Zoom Out e intente nuevamente")
      }
    })  
  } 

  moveMap(lnglat: tts.LatLng): void{    
    this.map.flyTo({
      center: lnglat,
      zoom: 14
    })
  }

  sendValue(): void{   
    this.newItemEvent.emit(this.lngLat)
  }    
}
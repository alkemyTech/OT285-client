import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as tt from '@tomtom-international/web-sdk-maps';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent implements OnInit {

  title: string = 'google-maps';
  map: any;
  currentLat: number = 0;
  currentLon: number = 0;

  ROOT_URL = 'https://api.tomtom.com/search/2/search/';
  searchResults: any = [];  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initLocationMap();
  }

  public ngAfterViewInit(): void {
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

  setPlaceLocation(lat: number, lng: number, placeName: string): void {
    this.map.flyTo({
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: 13,
    });

    const popup = new tt.Popup({
      anchor: 'bottom',
      offset: { bottom: [0, -40] },
    }).setHTML(placeName);

    const marker = new tt.Marker()
      .setLngLat({
        lat: lat,
        lng: lng,
      })
      .addTo(this.map);
    marker.setPopup(popup).togglePopup();
 }
}


  // getValue(value: string) {
  //   this.http  
  //     .get(  
  //       this.ROOT_URL +  
  //       `${value}.json?  
  //       lat=${this.currentLat}&  
  //       lon=${this.currentLon}&  
  //       minFuzzyLevel=1&  
  //       maxFuzzyLevel=2&  
  //       view=Unified&  
  //       relatedPois=off&  
  //       key=${environment.tomtom.key}`  
  //       )  
  //     .subscribe((data: any) => (this.searchResults = data['results']));  
  // }

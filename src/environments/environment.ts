// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'somos-mas-ong',
    appId: '1:846340107311:web:46b11eeb34254e377daada',
    storageBucket: 'somos-mas-ong.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDxlFDsjiqSJJo9ZAd35ZbEf7EltSGci1o',
    authDomain: 'somos-mas-ong.firebaseapp.com',
    messagingSenderId: '846340107311',
  },
  production: false,
  apiUrl: "https://ongapi.alkemy.org/api/",
  tomtom: {
    key: "d7nBf1XkOHAIAJEmTTRiLy516fefuiE3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { catchError, Observable, map } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RxjsService {

//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
//   constructor(private http:HttpClient) { }

//   getPosts(): Observable<any> {
//     return this.http.get(this.apiUrl).pipe(
//       map(data => {
//         console.log('Received data:', data);
//         return data;
//       }),
//       catchError((error) => {
//         console.error('Error:', error);
//         return [];
//       })
//     );
//   }


// }

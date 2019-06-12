import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../home-model';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() {
   }

  getPosts(): Observable<Post[]> {
    return Observable.create(observer => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json()) // or text() or blob() etc.
          .then(data => {
            // console.log(data);
            observer.next(data);
            observer.complete();
          })
          .catch(err => observer.error(err));
      });
    }
}

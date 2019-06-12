import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../home/home-model';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor() {
    console.log('service created');
   }

getPosts(): Observable<Post[]> {
  return Observable.create(observer => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // or text() or blob() etc.
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }


}

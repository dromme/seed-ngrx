import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../home-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  @Input() public posts: Observable<Post[]>;
  
  constructor() {
  }

  ngOnInit() {
    console.log(this.posts);
  }

}

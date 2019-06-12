import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Post } from '../../home-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnChanges {
  @Input() public posts: Post[];
  @Input() public loading: Boolean;

  constructor() {
  }

  ngOnChanges() {
    console.log(this.posts);
    console.log(this.loading);
  }

}

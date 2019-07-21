import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags-nav',
  templateUrl: './tags-nav.component.html',
  styleUrls: ['./tags-nav.component.less']
})
export class TagsNavComponent implements OnInit {
  @Input() pageOpenedList: object[]

  closeTag(event) {
    console.log(event)
  }

  constructor() { }

  ngOnInit() {
  }

}

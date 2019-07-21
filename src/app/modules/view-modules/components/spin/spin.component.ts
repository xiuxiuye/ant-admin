import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.less']
})
export class SpinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init()
  }

  @Input() position: string = 'absolute'
  @Input() tip: string = ''

  classes: object
  size: String

  init(): void {
    this.classes = {
      fixed: this.position === 'fixed',
      absolute: !(this.position === 'fixed')
    }
    this.size = this.position === 'fixed' ? 'large' : 'default'
  }
}

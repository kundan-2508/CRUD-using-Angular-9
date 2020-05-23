import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from '../models/tabs/tabs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() tabs:Tabs;
  @Input() position: string;
  constructor() { }

  ngOnInit(): void {
    var a = this.position;
  }

}

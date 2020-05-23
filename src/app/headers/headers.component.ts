import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from '../models/tabs/tabs';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input() tabs:Array<Tabs>;
  constructor() { }

  ngOnInit(): void {
    
  }

}

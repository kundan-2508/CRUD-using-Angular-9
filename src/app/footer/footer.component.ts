import { Component, OnInit, Input } from '@angular/core';
import { Tabs } from '../models/tabs/tabs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() tabs:Array<Tabs>;
  footerPosition:string = "bottom";
  constructor() { }

  ngOnInit(): void {
    
  }

}

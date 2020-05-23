import { Component, OnInit } from '@angular/core';
import { Tabs } from '../models/tabs/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerTabs:Array<Tabs>;
  footerTabs:Array<Tabs>;
  constructor() { }

  ngOnInit(): void {
    this.headerTabs = this.getHeaderTabList();
    this.footerTabs = this.getFooterTabList();
  }
  getHeaderTabList():Array<Tabs>{
    var tabs:Array<Tabs> = [];
    tabs.push(new Tabs(1,"CRUD Operation Using Angular 9.1.9",1,null,null,true));
    return tabs;
  }
  getFooterTabList(){
    var tabs:Array<Tabs> = [];
    tabs.push(new Tabs(1,"Copyright reserved.",1,null,null,true));
    return tabs;
  }
}

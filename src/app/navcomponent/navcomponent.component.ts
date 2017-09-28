import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navcomponent',
  templateUrl: './navcomponent.component.html',
  styleUrls: ['./navcomponent.component.css']
})
export class NavcomponentComponent implements OnInit {

  myLinks = ['link1', 'link2', 'link3'];

  constructor() { }

  ngOnInit() {
  }

}

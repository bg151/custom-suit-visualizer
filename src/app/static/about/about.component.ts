import { Component, OnInit,Input } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent{
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  title= "Select a Product"
  Products = [{
    name: 'Suit',
    url : './assets/suit.jpg'
  },{
    name: 'Tuxedo',
    url : './assets/tuxedo.jpg'
  },{
    name: 'Blazer',
    url: './assets/blazer.jpg'
  }];

  select() {
  	if (this){
	  	this.setSelection.emit(this.item.name);
	  }
  }

  constructor() {}

  ngOnInit() {}
}


import { Component, OnInit,Input } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-product',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})

export class BrandComponent{
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  title= "Select a Brand"
  Products = [{
    name: 'Joseph Abboud Custom',
    url : './assets/JACustomLogo.png'
  },{
    name: 'Joe Custom Express',
    url : './assets/JoeCELogo.png'
  },{
    name: 'Joe Custom',
    url: './assets/JoeLogo.png'
  }];

  select() {
  	if (this){
	  	// this.setSelection.emit(this.item.name);
	  }
  }

  constructor() {}

  ngOnInit() {}
}


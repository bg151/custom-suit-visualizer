import { Component, OnInit,Input } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-product',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss']
})

export class SwatchComponent{
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  title= "Select a fabric color range"
  Products = [{
    name: 'Blacks',
    url : 'black'
  },{
    name: 'Greys',
    url : 'gray'
  },{
    name: 'Blues',
    url: 'blue'
  },{
    name: 'Browns',
    url: 'brown'
  }];

  select() {
  	if (this){
	  	// this.setSelection.emit(this.item.name);
	  }
  }

  constructor() {}

  ngOnInit() {}
}


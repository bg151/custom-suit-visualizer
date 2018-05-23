import { Component, OnInit,Input } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-product',
  templateUrl: './jacket.component.html',
  styleUrls: ['./jacket.component.scss']
})

export class JacketComponent{
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  title = "Select a Jacket Style";

  Singles = [{
    name: 'Single - 1 button',
    url : './assets/single_1.png'
  },{
    name: 'Single - 2 button',
    url : './assets/single_2.png'
  },{
    name: 'Single - 3 button',
    url : './assets/single_3.png'
  }];
  
  Doubles = [{
    name: 'Double - 1 button',
    url : './assets/double_1.png'
  },{
    name: 'Double - 2 button',
    url : './assets/double_2.png'
  },{
    name: 'Double - 3 button',
    url : './assets/double_3.png'
  }];

  select() {
  	if (this){
	  	// this.setSelection.emit(this.item.name);
	  }
  }

  constructor() {}

  ngOnInit() {}
}


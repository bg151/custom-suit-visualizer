import { 
	Component,
	Output,
    Input,
    EventEmitter,
    OnChanges,
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'tile',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  template: `
    <div class="col" (click)="select()">
        <img src= {{item.url}} />
        <a target="_blank" rel="noopener" class="thumb-label" >
        	{{item.name}}
        </a>
    </div>`})

export class Tiles {

  @Output() setSelection: EventEmitter<any> = new EventEmitter();
  
  @Input() order: Order;
  @Input() items: Items;
  @Input() item : item;

  select() {
  	if (this){
	  	this.setSelection.emit(this.item.name);
	}
  }
}


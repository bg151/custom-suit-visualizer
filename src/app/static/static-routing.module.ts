import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { JacketComponent } from './jacket/jacket.component';
import { SwatchComponent } from './swatch/swatch.component';
import { ConfiguratorComponent } from './configurator/configurator.component';

const routes: Routes = [
  { path: 'product', 
    component: ProductComponent,
    data: { title: 'Product' } 
  },
  { path: 'brand', 
    component: BrandComponent,
    data: { title: 'Brand' } 
  },
  { path: 'jacket', 
    component: JacketComponent,
    data: { title: 'Jacket' } 
  },
  { path: 'swatch', 
    component: SwatchComponent,
    data: { title: 'Swatch' } 
  },
  { path: 'configurator', 
    component: ConfiguratorComponent,
    data: { title: 'Configurator' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StaticRoutingModule {

}


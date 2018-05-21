import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { JacketComponent } from './jacket/jacket.component';
import { SwatchComponent } from './swatch/swatch.component';
import { ConfiguratorComponent } from './configurator/configurator.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [
  ProductComponent,
  BrandComponent,
  JacketComponent,
  SwatchComponent,
  ConfiguratorComponent
  ]
})
export class StaticModule {}

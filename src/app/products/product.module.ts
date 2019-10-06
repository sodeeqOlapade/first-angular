import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailsComponent } from "./product-details.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}

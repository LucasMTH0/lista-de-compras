import { Component } from '@angular/core';
import {ProductFormComponent} from '../../../components/product-form/product-form.component';

@Component({
  selector: 'app-create-product',
  imports: [
    ProductFormComponent
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

}

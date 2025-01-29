import {Component, Inject, Input} from '@angular/core';
import { Product} from '../../interface/Product';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: Product | undefined | any;

  constructor(private router: Router) {
  }

  handleNavigateToDetails(){
    if(this.product){
      this.router.navigateByUrl(`/products/detail/${this.product['_id']}`);
    }
  }
}

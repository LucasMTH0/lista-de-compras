import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {Product} from '../../interface/Product';
import {Router} from '@angular/router';
import {cutString} from '../../util/cut-string';
import {CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  protected readonly cutString = cutString;
  @Input() product: Product | undefined | any;
  router = inject(Router)

  handleNavigateToDetails(){
    this.router.navigateByUrl(`/products/detail/${this.product['_id']}`);
  }

}

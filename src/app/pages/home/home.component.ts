import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products/products.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {ListService} from '../../services/list/list.service';
import { CreateButtonOptionsComponent } from '../../components/create-button-options/create-button-options.component';
import { CategoriesList } from '../../util/categories-list';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe,ProductCardComponent,CommonModule,CreateButtonOptionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private router = inject(Router);
  private listService = inject(ListService);
  public productsService = inject(ProductsService);
  protected readonly CategoriesList = CategoriesList;
  
  public list$ = this.listService.list();
  public products$ = this.productsService.list();

  


  handleNavigateToRegisterPage(route: string){
    this.router.navigateByUrl(route)
  }
}

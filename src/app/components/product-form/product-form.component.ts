import {Component, DestroyRef, inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PriorityList} from '../../util/priority-list';
import {CategoriesList} from '../../util/categories-list';
import {ProductsService} from '../../services/products/products.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {LocalStorageService} from '../../services/localStorage/local-storage.service';
import {ApiResponse} from '../../interface/ApiResponse';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Product} from '../../interface/Product';
import {NgxCurrencyDirective} from 'ngx-currency';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule, 
    NgxCurrencyDirective, 
    MatFormFieldModule, 
    MatInputModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  @Input() variant: 'register' | 'update' = 'register'
  @Input() product: Product | undefined | any;
  userService = inject(UserService);

  protected readonly PriorityList = PriorityList;
  protected readonly CategoriesList = CategoriesList;

  constructor(
    private localStorage: LocalStorageService,
    private productService: ProductsService,
    private toastrService: ToastrService,
    private destroyRef: DestroyRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const user: any = this.userService.user();
    if(user){
      this.productForm.controls['userId'].setValue(user.id);
    }
    if(this.variant === 'update'){
      this.fillProductValue()
    }
  }

  productForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    listId: new FormControl(''),
    status: new FormControl(false),
    createdAt: new FormControl(new Date()),
  })

  fillProductValue(){
    if(this.product){
      this.productForm.patchValue(this.product)
    }
  }

  selectProductImage(image: any){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result)
      this.productForm.controls.image.setValue(fileReader.result as string);
    }
  }

  handleUpdateProduct(){
    if(this.product){
      const productId = this.product['_id']
      this.productService.update( productId, this.productForm.value as Product)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        ({message}: any) => {
          this.toastrService.success(message)
          this.router.navigateByUrl('/')
        }
      )
    }
  }

  handleSubmitRegister(){
    this.productForm.controls['createdAt'].setValue(new Date());
    this.productService.create(this.productForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
        ({message}: ApiResponse) => {
           this.toastrService.success(message)
           this.router.navigate(['/']);
        },
        ({error}: ApiResponse) => {
          this.toastrService.error(error);
        }
      )
  }
}

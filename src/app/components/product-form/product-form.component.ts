import {Component, DestroyRef, Input, OnInit, Output} from '@angular/core';
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

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {
  @Input() variant: 'register' | 'update' = 'register'
  @Input() product: Product | undefined | any;

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
    const user: any = this.localStorage.getUserStorage();
    if(user){
      const userParsed = JSON.parse(user);
      this.productForm.controls['userId'].setValue(userParsed.id);
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
      this.productForm.controls.image.setValue(fileReader.result as string);
    }
  }

  handleUpdateProduct(){
    if(this.product){
      const productId =this.product['_id']
      this.productService.update( productId, this.productForm.value as Product).subscribe(
        (messageUpdateSucessful: ApiResponse) => {
          this.toastrService.success(messageUpdateSucessful.message)
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

import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ListService} from '../../services/list/list.service';
import {List} from '../../interface/List';
import {ApiResponse} from '../../interface/ApiResponse';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-form',
  imports: [ReactiveFormsModule],
  templateUrl: './list-form.component.html',
  styleUrl: './list-form.component.scss'
})
export class ListFormComponent {
  listForm = new FormGroup({
    name: new FormControl('', Validators.required),
    idUser: new FormControl(''),
    description: new FormControl('')
  })
  @Input() variant: 'register' | 'update' = 'register';
  constructor(
    private router: Router,
    private listService: ListService,
    private toastrService: ToastrService
  ) {}

  handleRegisterList(){
    this.listService.create(this.listForm.value as List).subscribe(
      (registerListMessage: ApiResponse)=> {
        this.toastrService.success(registerListMessage.message)
        this.router.navigate(['/']);
      }
    )
  }

  handleUpdateList(){
    this.listService.update(this.listForm.value as List).subscribe(
      (registerListMessage: ApiResponse)=> {
        this.toastrService.success(registerListMessage.message)
        this.router.navigate(['/']);
      }
    )
  }
}

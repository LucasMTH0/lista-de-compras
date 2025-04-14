import { Component, output } from '@angular/core';

@Component({
  selector: 'app-create-button-options',
  imports: [],
  templateUrl: './create-button-options.component.html',
  styleUrl: './create-button-options.component.scss'
})
export class CreateButtonOptionsComponent {
  emitNavigateToCreatePage = output<string>();

  handleNavigateToCreateList(route: string){
    this.emitNavigateToCreatePage.emit(route);
  }



}

import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-button-options',
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './create-button-options.component.html',
  styleUrl: './create-button-options.component.scss'
})
export class CreateButtonOptionsComponent {
  emitNavigateToCreatePage = output<string>();

  handleNavigateToCreateList(route: string){
    this.emitNavigateToCreatePage.emit(route);
  }
}

import { Component, Inject } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { LoadingService } from '../../services/loading/loading.service';
@Component({
  selector: 'app-loading',
  imports: [MatProgressSpinnerModule],

  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  protected loadingService = Inject(LoadingService)
}

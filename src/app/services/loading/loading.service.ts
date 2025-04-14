import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = signal<boolean>(true);
  constructor() { }

  public setLoading(value: boolean){
    this.isLoading.set(value)
  }
  public getLoading(){
    return this.isLoading.asReadonly()
  }
}

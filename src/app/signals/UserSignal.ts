import {Inject, signal} from '@angular/core';
import {User} from '../interface/User';

@Inject({
  providedIn: 'root'
})

export class UserSignal {
  private signal = signal<User | null>(null);

  public getUser(){
    return this.signal.asReadonly();
  }

  public setUser(user: User){
    this.signal.set(user);
  }

  public resetUser(){
    this.signal.set(null);
  }
}

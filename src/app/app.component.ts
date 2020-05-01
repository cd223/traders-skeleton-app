import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traders';

  status: string = "Waiting"
  newValue: number

  startObservable() {
    this.status = "Started"
    let obs: Observable<number> = 
      new Observable(
        subscriber => {
          for (let v of [1,2,3,4]) {
            setTimeout( () => {
              subscriber.next(v);
              }, 1000*v );
          }
          let unsubscribe = () => { this.status = "Done!"}
          return unsubscribe
      });

      let sub: Subscription = obs.subscribe(
        value => this.newValue = value,
        error => { console.log(error); this.status = "Error!"; }
      )

      setTimeout(() => {
          if (!sub.closed) sub.unsubscribe();
        }, 6000);
  }

}

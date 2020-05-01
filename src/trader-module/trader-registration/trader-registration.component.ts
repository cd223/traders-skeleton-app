import { Component, OnInit, OnDestroy } from '@angular/core';
import { TraderServiceService } from '../trader-service/trader-service.service';
import { Trader } from '../model/trader';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trader-registration',
  templateUrl: './trader-registration.component.html',
  styleUrls: ['./trader-registration.component.css']
})
export class TraderRegistrationComponent implements OnInit, OnDestroy {

  traderServiceSubscription: Subscription;

  constructor(private traderService: TraderServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.traderServiceSubscription.unsubscribe()
  }

  register(form: NgForm) {
    let trader = new Trader() 
    trader.location = form.value.location
    trader.name = form.value.name
    trader.deskNumber = form.value.deskNumber
    trader.valueTraded = form.value.valueTraded
    trader.currency = form.value.currency
    this.traderServiceSubscription = this.traderService.register(trader).subscribe(
      success => { console.log(success); this.router.navigate(['/trader-list']) },
      err => console.log(err)
    )
  }

}

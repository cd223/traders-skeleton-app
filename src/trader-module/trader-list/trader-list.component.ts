import { Component, OnInit, OnDestroy } from '@angular/core';
import { TraderServiceService } from '../trader-service/trader-service.service';
import { Trader } from '../model/trader';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trader-list',
  templateUrl: './trader-list.component.html',
  styleUrls: ['./trader-list.component.css']
})
export class TraderListComponent implements OnInit, OnDestroy {

  traders: Trader[];
  traderServiceSubscription: Subscription;
  threshold: number;
  traderItemStyle = {
    'color': 'blue',
    'border-color': 'black',
    'border-style': 'solid'
  }

  constructor(private traderService: TraderServiceService) { 
  }

  ngOnInit(): void {
    this.traders = []
    this.threshold = 1
    this.traderServiceSubscription = this.traderService.getTraders().subscribe(
      traders => { 
        console.log(traders)
        traders.map(trader => this.traders.push(trader))
      },
      err => console.log(err)
    )
  }

  ngOnDestroy(): void {
    this.traderServiceSubscription.unsubscribe();
  }

}

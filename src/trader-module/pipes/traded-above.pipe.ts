import { Pipe, PipeTransform } from '@angular/core';
import { Trader } from '../model/trader';

@Pipe({
  name: 'tradedAbove'
})
export class TradedAbovePipe implements PipeTransform {

  transform(traders: Trader[], threshold?: number): Trader[] {
    if(threshold) {
      let filtered = traders.filter(t => t.valueTraded.valueOf() > threshold.valueOf())
      return filtered 
    }
    let filtered = traders.filter(t => t.valueTraded.valueOf() > 500) 
    return filtered;
  }

}

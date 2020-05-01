import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraderRegistrationComponent } from './trader-registration/trader-registration.component';
import { FormsModule } from '@angular/forms'
import { TraderServiceService } from './trader-service/trader-service.service';
import { TraderListComponent } from './trader-list/trader-list.component';
import { TradedAbovePipe } from './pipes/traded-above.pipe';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [ 
    TraderListComponent, 
    TraderRegistrationComponent,
    TradedAbovePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ TraderServiceService ],
  exports: [ TraderListComponent, TraderRegistrationComponent ]
})
export class TraderModule { }

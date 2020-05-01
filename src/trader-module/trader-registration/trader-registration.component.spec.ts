import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderRegistrationComponent } from './trader-registration.component';
import { Trader } from '../model/trader';
import { TraderServiceService } from '../trader-service/trader-service.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

class MockTraderService {
  traders: Trader[]

  constructor() {
    this.traders = []
  }

  register(trader: Trader) {
    this.traders.push(trader)
    console.log(this.traders)
  }

  getTraders(): Trader[] {
    return this.traders
  }
}

describe('TraderRegistrationComponent', () => {
  let component: TraderRegistrationComponent;
  let fixture: ComponentFixture<TraderRegistrationComponent>;
  const testForm = <NgForm>{
    value: {
        id: "1",
        location: "London",
        name: "Chris",
        deskNumber: 123 
    }
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderRegistrationComponent ],
      imports: [ CommonModule, FormsModule ], 
      providers: [ {provide: TraderServiceService, useClass: MockTraderService }  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register successfully', () => {
    component.register(testForm)
  }) 
});

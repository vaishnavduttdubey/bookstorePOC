import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysDealComponent } from './todays-deal.component';

describe('TodaysDealComponent', () => {
  let component: TodaysDealComponent;
  let fixture: ComponentFixture<TodaysDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysDealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

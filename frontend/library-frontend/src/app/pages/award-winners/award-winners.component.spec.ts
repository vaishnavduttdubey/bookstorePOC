import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardWinnersComponent } from './award-winners.component';

describe('AwardWinnersComponent', () => {
  let component: AwardWinnersComponent;
  let fixture: ComponentFixture<AwardWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardWinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

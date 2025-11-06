import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSetComponent } from './box-set.component';

describe('BoxSetComponent', () => {
  let component: BoxSetComponent;
  let fixture: ComponentFixture<BoxSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

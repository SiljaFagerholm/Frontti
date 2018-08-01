import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkFoodComponent } from './junk-food.component';

describe('JunkFoodComponent', () => {
  let component: JunkFoodComponent;
  let fixture: ComponentFixture<JunkFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunkFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunkFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

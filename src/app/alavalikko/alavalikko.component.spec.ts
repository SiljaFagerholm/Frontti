import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlavalikkoComponent } from './alavalikko.component';

describe('AlavalikkoComponent', () => {
  let component: AlavalikkoComponent;
  let fixture: ComponentFixture<AlavalikkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlavalikkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlavalikkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

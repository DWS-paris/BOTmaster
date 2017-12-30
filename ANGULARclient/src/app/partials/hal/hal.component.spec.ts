import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalComponent } from './hal.component';

describe('HalComponent', () => {
  let component: HalComponent;
  let fixture: ComponentFixture<HalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaCurvaComponent } from './data-adder';

describe('AgregaCurvaComponent', () => {
  let component: AgregaCurvaComponent;
  let fixture: ComponentFixture<AgregaCurvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaCurvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaCurvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

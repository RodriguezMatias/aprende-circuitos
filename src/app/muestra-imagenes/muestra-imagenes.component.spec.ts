import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraImagenesComponent } from './muestra-imagenes.component';

describe('MuestraImagenesComponent', () => {
  let component: MuestraImagenesComponent;
  let fixture: ComponentFixture<MuestraImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

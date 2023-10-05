import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtarjetaComponent } from './dashtarjeta.component';

describe('DashtarjetaComponent', () => {
  let component: DashtarjetaComponent;
  let fixture: ComponentFixture<DashtarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashtarjetaComponent]
    });
    fixture = TestBed.createComponent(DashtarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

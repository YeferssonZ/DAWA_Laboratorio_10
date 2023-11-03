import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosVisualizacionComponent } from './datos-visualizacion.component';

describe('DatosVisualizacionComponent', () => {
  let component: DatosVisualizacionComponent;
  let fixture: ComponentFixture<DatosVisualizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosVisualizacionComponent]
    });
    fixture = TestBed.createComponent(DatosVisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

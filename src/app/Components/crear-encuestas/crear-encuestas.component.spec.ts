import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEncuestasComponent } from './crear-encuestas.component';

describe('CrearEncuestasComponent', () => {
  let component: CrearEncuestasComponent;
  let fixture: ComponentFixture<CrearEncuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEncuestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

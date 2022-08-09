import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasCreadasComponent } from './encuestas-creadas.component';

describe('EncuestasCreadasComponent', () => {
  let component: EncuestasCreadasComponent;
  let fixture: ComponentFixture<EncuestasCreadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestasCreadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestasCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

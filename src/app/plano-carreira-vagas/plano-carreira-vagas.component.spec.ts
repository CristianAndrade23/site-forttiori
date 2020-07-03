import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoCarreiraVagasComponent } from './plano-carreira-vagas.component';

describe('PlanoCarreiraVagasComponent', () => {
  let component: PlanoCarreiraVagasComponent;
  let fixture: ComponentFixture<PlanoCarreiraVagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoCarreiraVagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoCarreiraVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia3 } from './noticia3';

describe('Noticia3', () => {
  let component: Noticia3;
  let fixture: ComponentFixture<Noticia3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticia3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticia3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

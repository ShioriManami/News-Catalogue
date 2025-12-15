import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia1 } from './noticia1';

describe('Noticia1', () => {
  let component: Noticia1;
  let fixture: ComponentFixture<Noticia1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticia1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticia1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

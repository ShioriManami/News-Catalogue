import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia2 } from './noticia2';

describe('Noticia2', () => {
  let component: Noticia2;
  let fixture: ComponentFixture<Noticia2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticia2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticia2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

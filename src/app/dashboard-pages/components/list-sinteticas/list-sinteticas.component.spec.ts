import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSinteticasComponent } from './list-sinteticas.component';

describe('ListSinteticasComponent', () => {
  let component: ListSinteticasComponent;
  let fixture: ComponentFixture<ListSinteticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSinteticasComponent]
    });
    fixture = TestBed.createComponent(ListSinteticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

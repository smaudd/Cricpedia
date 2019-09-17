import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteamPage } from './selecteam.page';

describe('SelecteamPage', () => {
  let component: SelecteamPage;
  let fixture: ComponentFixture<SelecteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecteamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Menu3-1Component } from './menu3-1.component';

describe('Menu3-1Component', () => {
  let component: Menu3-1Component;
  let fixture: ComponentFixture<Menu3-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu3-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu3-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

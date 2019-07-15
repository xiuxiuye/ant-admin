/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Menu2-1Component } from './menu2-1.component';

describe('Menu2-1Component', () => {
  let component: Menu2-1Component;
  let fixture: ComponentFixture<Menu2-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu2-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

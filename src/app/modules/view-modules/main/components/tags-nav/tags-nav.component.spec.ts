/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TagsNavComponent } from './tags-nav.component';

describe('TagsNavComponent', () => {
  let component: TagsNavComponent;
  let fixture: ComponentFixture<TagsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

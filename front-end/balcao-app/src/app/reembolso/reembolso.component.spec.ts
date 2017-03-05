/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReembolsoComponent } from './reembolso.component';

describe('ReembolsoComponent', () => {
  let component: ReembolsoComponent;
  let fixture: ComponentFixture<ReembolsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReembolsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

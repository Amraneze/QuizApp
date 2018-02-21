import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Result.DialogComponent } from './result.dialog.component';

describe('Result.DialogComponent', () => {
  let component: Result.DialogComponent;
  let fixture: ComponentFixture<Result.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Result.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Result.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

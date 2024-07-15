import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdComponent } from './std.component';

describe('StdComponent', () => {
  let component: StdComponent;
  let fixture: ComponentFixture<StdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdComponent]
    });
    fixture = TestBed.createComponent(StdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

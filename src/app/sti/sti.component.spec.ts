import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiComponent } from './sti.component';

describe('StiComponent', () => {
  let component: StiComponent;
  let fixture: ComponentFixture<StiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StiComponent]
    });
    fixture = TestBed.createComponent(StiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

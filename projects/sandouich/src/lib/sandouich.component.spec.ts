import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandouichComponent } from './sandouich.component';

describe('SandouichComponent', () => {
  let component: SandouichComponent;
  let fixture: ComponentFixture<SandouichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandouichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandouichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

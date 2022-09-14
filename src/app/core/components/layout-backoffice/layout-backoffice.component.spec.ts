import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBackofficeComponent } from './layout-backoffice.component';

describe('LayoutBackofficeComponent', () => {
  let component: LayoutBackofficeComponent;
  let fixture: ComponentFixture<LayoutBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

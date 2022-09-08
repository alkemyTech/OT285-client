import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberslistComponent } from './members-list.component';

describe('MemberslistComponent', () => {
  let component: MemberslistComponent;
  let fixture: ComponentFixture<MemberslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

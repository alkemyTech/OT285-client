import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTitleNewsComponent } from './show-title-news.component';

describe('ShowTitleNewsComponent', () => {
  let component: ShowTitleNewsComponent;
  let fixture: ComponentFixture<ShowTitleNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTitleNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTitleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

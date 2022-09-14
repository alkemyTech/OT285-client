import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomTomMapsComponent } from './tomtom-maps.component';

describe('TomTomMapsComponent', () => {
  let component: TomTomMapsComponent;
  let fixture: ComponentFixture<TomTomMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomTomMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomTomMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

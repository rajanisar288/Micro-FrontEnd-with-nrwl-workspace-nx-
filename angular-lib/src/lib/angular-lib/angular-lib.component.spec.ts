import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularLibComponent } from './angular-lib.component';

describe('AngularLibComponent', () => {
  let component: AngularLibComponent;
  let fixture: ComponentFixture<AngularLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

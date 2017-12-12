import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBoxComponent } from './count-box.component';

describe('CountBoxComponent', () => {
  let component: CountBoxComponent;
  let fixture: ComponentFixture<CountBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

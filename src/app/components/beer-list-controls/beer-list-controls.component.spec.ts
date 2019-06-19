import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListControlsComponent } from './beer-list-controls.component';

describe('BeerListControlsComponent', () => {
  let component: BeerListControlsComponent;
  let fixture: ComponentFixture<BeerListControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

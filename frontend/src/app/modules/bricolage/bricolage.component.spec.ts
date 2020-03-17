import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BricolageComponent } from './bricolage.component';

describe('BricolageComponent', () => {
  let component: BricolageComponent;
  let fixture: ComponentFixture<BricolageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BricolageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BricolageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

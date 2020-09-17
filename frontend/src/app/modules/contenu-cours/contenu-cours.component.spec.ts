import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuCoursComponent } from './contenu-cours.component';

describe('ContenuCoursComponent', () => {
  let component: ContenuCoursComponent;
  let fixture: ComponentFixture<ContenuCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenuCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

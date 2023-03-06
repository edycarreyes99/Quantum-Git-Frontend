import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsListComponent } from './commits-list.component';

describe('CommitsListComponent', () => {
  let component: CommitsListComponent;
  let fixture: ComponentFixture<CommitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

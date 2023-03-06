import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsListItemComponent } from './commits-list-item.component';

describe('CommitsListItemComponent', () => {
  let component: CommitsListItemComponent;
  let fixture: ComponentFixture<CommitsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

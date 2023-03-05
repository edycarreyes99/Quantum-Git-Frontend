import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposViewComponent } from './repos-view.component';

describe('ReposViewComponent', () => {
  let component: ReposViewComponent;
  let fixture: ComponentFixture<ReposViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

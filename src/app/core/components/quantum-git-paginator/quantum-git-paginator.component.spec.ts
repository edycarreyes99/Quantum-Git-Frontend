import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumGitPaginatorComponent } from './quantum-git-paginator.component';

describe('QuantumGitPaginatorComponent', () => {
  let component: QuantumGitPaginatorComponent;
  let fixture: ComponentFixture<QuantumGitPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantumGitPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumGitPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

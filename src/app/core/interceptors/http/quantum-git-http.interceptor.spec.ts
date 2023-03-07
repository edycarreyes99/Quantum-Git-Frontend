import { TestBed } from '@angular/core/testing';

import { QuantumGitHttpInterceptor } from './quantum-git-http.interceptor';

describe('QuantumGitHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      QuantumGitHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: QuantumGitHttpInterceptor = TestBed.inject(QuantumGitHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

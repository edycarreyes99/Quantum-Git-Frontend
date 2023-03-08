import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from, Observable, switchMap} from 'rxjs';
import {AuthService} from "../../../modules/auth/services/auth.service";

@Injectable()
export class QuantumGitHttpInterceptor implements HttpInterceptor {
  excluded: string[] = ['auth', 'assets'];

  constructor(
    private authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    for (const excludedUrl of this.excluded) {
      if (request.url.includes(excludedUrl)) {
        return next.handle(request);
      }
    }

    return from(this.authService.getCurrentUserJwtToken()).pipe(
      switchMap((token: string) => {
        const req = request.clone({
          url: request.url,
          setHeaders: {
            Authorization: 'Bearer ' + token,
            Secondary_Authorization: this.authService.getCurrentGitHubUserAccessToken()
          }
        });
        return next.handle(req);
      })
    );
  }
}

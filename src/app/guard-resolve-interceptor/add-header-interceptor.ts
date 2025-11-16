import { HttpInterceptorFn } from '@angular/common/http';

export const addHeaderInterceptor: HttpInterceptorFn =
  (req, next) => {
   const reqWithHeader = req.clone({
      headers: req.headers.set('X-khalil', 'new header value'),
    });

  return next(reqWithHeader);
};

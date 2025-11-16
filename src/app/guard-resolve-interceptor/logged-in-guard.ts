import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {inject} from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const isLogged = false;
  const router = inject(Router);
  if (!isLogged) {
    const notAllowedPage = router.parseUrl("/not-allowed");
    return new RedirectCommand(notAllowedPage, {
      skipLocationChange: true,
    });
  }
  return isLogged;
};

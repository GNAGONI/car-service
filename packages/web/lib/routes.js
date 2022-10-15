import { Router } from 'server/pages';

const isUserAuthenticated = ctx => ctx.store.getState().userAuth.isAuthenticated;

export const redirect = (ctx, redirectRoute = '/') => {
  if (ctx.isServer) {
    // Server-side
    ctx.res.writeHead(302, {
      Location: redirectRoute,
    });
    ctx.res.end();
  } else {
    // Client-side
    Router.pushRoute(redirectRoute);
  }
};

export const authentificatedRoute = (ctx, redirectRoute) => {
  if (!isUserAuthenticated(ctx)) {
    redirect(ctx, redirectRoute);
  }
};

export const unauthentificatedRoute = (ctx, redirectRoute) => {
  if (isUserAuthenticated(ctx)) {
    redirect(ctx, redirectRoute);
  }
};

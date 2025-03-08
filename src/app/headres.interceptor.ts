import { HttpInterceptorFn } from '@angular/common/http';

export const headresInterceptor: HttpInterceptorFn = (req, next) => {

  let myToken :any =localStorage.getItem('token');


  let updatedReq=req.clone({

  setHeaders:{
    token :myToken
  }
})


  return next(updatedReq);
};

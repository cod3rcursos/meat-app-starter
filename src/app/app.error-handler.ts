import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;

    if (error instanceof HttpErrorResponse) { // Caso o erro tenha sido proveniente da resposta
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.ToString();
    }

    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
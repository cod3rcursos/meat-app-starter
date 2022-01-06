import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
      const body = error.error;
      errorMessage = `${error.status}: ${error.status} - ${
        error.statusText || ""
      }  ${body}`;
    } else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}

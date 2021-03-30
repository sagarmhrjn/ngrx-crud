import { throwError } from 'rxjs';

export function handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
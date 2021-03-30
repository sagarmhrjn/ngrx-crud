import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

export const httpOptions = {
    headers: headers
};
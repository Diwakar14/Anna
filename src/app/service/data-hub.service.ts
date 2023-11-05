import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataHubService {
  constructor(private readonly http: HttpClient) {}

  getData() {
    return this.http.get('https://localhost:7042/api/DataProducer', {
      observe: 'response' as 'body',
      responseType: 'arraybuffer',
    });
  }
}

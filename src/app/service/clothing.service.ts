import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClothingService {
  constructor(private readonly http: HttpClient) {}

  getAllClothes(queryParams: HttpParams) {
    return this.http.get('https://localhost:7237/api/Clothing', {
      params: queryParams,
    });
  }

  getAllClothesViaStream(queryParams: HttpParams) {
    return this.http.get('https://localhost:7237/api/Clothing/stream', {
      params: queryParams,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class HttpBaseService {
  public authCode: string = "";
  public static apiKeyName: string = "spaceadventure_apikey";
  private _baseHeaders: HttpHeaders;
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
    this._baseHeaders = new HttpHeaders();
    let apiKey = window.localStorage.getItem(HttpBaseService.apiKeyName);
    if (apiKey) {
      this.AddAuthorisationHeader(apiKey);
    }
  }

  public AddAuthorisationHeader(authCode: string): void {
    this.authCode = authCode;
    const authHeaderName: string = 'ApiKey';
    const authHeader = this._baseHeaders.get(authHeaderName);
    if (!authHeader) {
      this._baseHeaders = this._baseHeaders.append(authHeaderName, authCode);
    } else {
      this._baseHeaders = this._baseHeaders.set(authHeaderName, authCode);
    }
  }

  public postOverride<T>(url: string, body: any | null, optionsOverride?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}): Observable<any> {
    const options = { headers: this._baseHeaders };
    Object.assign(options, optionsOverride);
    return this.httpClient.post<T>(url, body, options);
  }

  public getOverride<T>(url: string, optionsOverride?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json' | 'text';
    withCredentials?: boolean;
  }): Observable<any> {
    const options = { headers: this._baseHeaders };
    Object.assign(options, optionsOverride);
    return this.httpClient.get<T>(url, options);
  }
}

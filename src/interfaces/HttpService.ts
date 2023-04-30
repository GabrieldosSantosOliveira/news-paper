/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpServiceResponse<T = any> {
  statusCode: number;
  data: T;
}

export interface HttpServiceInterceptorsResponse {
  onRejected(response: HttpServiceResponse): Promise<HttpServiceResponse>;
}
export interface HttpServiceInterceptors {
  response: HttpServiceInterceptorsResponse;
}
export interface HttpServiceOptionsHeaders {
  contentType?: string;
  authorization?: string;
}
export interface HttpServiceOptions {
  body?: any;
  headers?: HttpServiceOptionsHeaders;
}
export abstract class HttpService {
  public abstract interceptors: HttpServiceInterceptors | null;
  abstract get<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>>;
  abstract post<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>>;
  abstract put<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>>;
  abstract delete<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>>;
  abstract patch<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>>;
}

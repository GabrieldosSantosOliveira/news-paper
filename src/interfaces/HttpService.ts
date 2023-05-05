/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpServiceResponse<T = any> {
  statusCode: number;
  data: T;
}

export interface HttpServiceInterceptorsResponseParams {
  method: HttpServiceMethod;
  url: string;
  data?: any;
  headers?: HttpServiceOptionsHeaders;
  statusCode: number;
}
export interface HttpServiceInterceptorsResponse {
  onRejected(
    response: HttpServiceInterceptorsResponseParams,
  ): Promise<HttpServiceResponse>;
}
export interface HttpServiceInterceptors {
  response: HttpServiceInterceptorsResponse;
}
export type HttpServiceMethod = 'get' | 'delete' | 'put' | 'patch' | 'post';
export interface HttpServiceOptionsHeaders {
  contentType?: string;
  authorization?: string;
}
export interface HttpServiceOptions {
  body?: any;
  headers?: HttpServiceOptionsHeaders;
}
export interface HttpServiceRequest {
  method: HttpServiceMethod;
  url: string;
  body?: any;
  headers?: HttpServiceOptionsHeaders;
}
export abstract class HttpService {
  public abstract interceptors: HttpServiceInterceptors | null;
  abstract request<T = any>(
    request: HttpServiceRequest,
  ): Promise<HttpServiceResponse<T>>;
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

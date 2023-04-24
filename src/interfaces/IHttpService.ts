/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IHttpServiceResponse<T = any> {
  statusCode: number;
  data: T;
}

export interface IHttpServiceInterceptorsResponse {
  onRejected(response: IHttpServiceResponse): Promise<IHttpServiceResponse>;
}
export interface IHttpServiceInterceptors {
  response: IHttpServiceInterceptorsResponse;
}
export interface IHttpServiceOptionsHeaders {
  contentType?: string;
}
export interface IHttpServiceOptions {
  body?: any;
  headers?: IHttpServiceOptionsHeaders;
}
export abstract class IHttpService {
  public abstract interceptors: IHttpServiceInterceptors | null;
  abstract get<T = any>(
    url: string,
    options?: IHttpServiceOptions,
  ): Promise<IHttpServiceResponse<T>>;
  abstract post<T = any>(
    url: string,
    options?: IHttpServiceOptions,
  ): Promise<IHttpServiceResponse<T>>;
  abstract put<T = any>(
    url: string,
    options?: IHttpServiceOptions,
  ): Promise<IHttpServiceResponse<T>>;
  abstract delete<T = any>(
    url: string,
    options?: IHttpServiceOptions,
  ): Promise<IHttpServiceResponse<T>>;
  abstract patch<T = any>(
    url: string,
    options?: IHttpServiceOptions,
  ): Promise<IHttpServiceResponse<T>>;
}

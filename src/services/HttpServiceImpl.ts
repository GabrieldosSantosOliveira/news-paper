/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpService,
  HttpServiceOptions,
  HttpServiceInterceptors,
  HttpServiceResponse,
} from '@/interfaces/HttpService';

export class HttpServiceImpl implements HttpService {
  public interceptors: HttpServiceInterceptors = {
    response: {
      onRejected: async (res) => res,
    },
  };
  async get<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(options?.body),
      headers: {
        'Content-Type': options?.headers?.contentType || 'application/json',
      },
    });
    const data = res.json() as T;
    if (res.status >= 400) {
      return this.interceptors.response.onRejected({
        data,
        statusCode: res.status,
      });
    }
    return { data, statusCode: res.status };
  }
  async post<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(options?.body),
      headers: {
        'Content-Type': options?.headers?.contentType || 'application/json',
      },
    });
    const data = res.json() as T;
    if (res.status >= 400) {
      return this.interceptors.response.onRejected({
        data,
        statusCode: res.status,
      });
    }
    return { data, statusCode: res.status };
  }
  async put<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(options?.body),
      headers: {
        'Content-Type': options?.headers?.contentType || 'application/json',
      },
    });
    const data = res.json() as T;
    if (res.status >= 400) {
      return this.interceptors.response.onRejected({
        data,
        statusCode: res.status,
      });
    }
    return { data, statusCode: res.status };
  }
  async delete<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    const res = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(options?.body),
      headers: {
        'Content-Type': options?.headers?.contentType || 'application/json',
      },
    });
    const data = res.json() as T;
    if (res.status >= 400) {
      return this.interceptors.response.onRejected({
        data,
        statusCode: res.status,
      });
    }
    return { data, statusCode: res.status };
  }
  async patch<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(options?.body),
      headers: {
        'Content-Type': options?.headers?.contentType || 'application/json',
      },
    });
    const data = res.json() as T;
    if (res.status >= 400) {
      return this.interceptors.response.onRejected({
        data,
        statusCode: res.status,
      });
    }
    return { data, statusCode: res.status };
  }
}
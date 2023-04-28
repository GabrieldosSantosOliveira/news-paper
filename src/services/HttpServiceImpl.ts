/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnexpectedError } from '@/errors/UnexpectedError';
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
    try {
      const res = await fetch(url, {
        method: 'GET',
        body: JSON.stringify(options?.body),
        headers: {
          'Content-Type': options?.headers?.contentType || 'application/json',
        },
      });
      const data = (await res.json()) as T;
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data,
          statusCode: res.status,
        });
      }
      return { data, statusCode: res.status };
    } catch {
      throw new UnexpectedError();
    }
  }
  async post<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(options?.body),
        headers: {
          'Content-Type': options?.headers?.contentType || 'application/json',
        },
      });
      const data = (await res.json()) as T;
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data,
          statusCode: res.status,
        });
      }
      return { data, statusCode: res.status };
    } catch {
      throw new UnexpectedError();
    }
  }
  async put<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(options?.body),
        headers: {
          'Content-Type': options?.headers?.contentType || 'application/json',
        },
      });
      const data = (await res.json()) as T;
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data,
          statusCode: res.status,
        });
      }
      return { data, statusCode: res.status };
    } catch {
      throw new UnexpectedError();
    }
  }
  async delete<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(options?.body),
        headers: {
          'Content-Type': options?.headers?.contentType || 'application/json',
        },
      });
      const data = (await res.json()) as T;
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data,
          statusCode: res.status,
        });
      }
      return { data, statusCode: res.status };
    } catch {
      throw new UnexpectedError();
    }
  }
  async patch<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(options?.body),
        headers: {
          'Content-Type': options?.headers?.contentType || 'application/json',
        },
      });
      const data = (await res.json()) as T;
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data,
          statusCode: res.status,
        });
      }
      return { data, statusCode: res.status };
    } catch {
      throw new UnexpectedError();
    }
  }
}

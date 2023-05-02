/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnexpectedError } from '@/errors/UnexpectedError';
import {
  HttpService,
  HttpServiceOptions,
  HttpServiceInterceptors,
  HttpServiceResponse,
} from '@/interfaces/HttpService';
import axios, { isAxiosError } from 'axios';
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
      axios.defaults.headers.common.Authorization =
        options?.headers?.authorization;
      axios.defaults.headers.common['Content-Type'] =
        options?.headers?.contentType || 'application/json';
      const res = await axios.get(url, options?.body);
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data: res.data,
          statusCode: res.status,
        });
      }
      return { data: res.data, statusCode: res.status };
    } catch (error) {
      if (isAxiosError(error) && error.response?.status) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status,
        };
      }
      throw new UnexpectedError();
    }
  }
  async post<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      axios.defaults.headers.common.Authorization =
        options?.headers?.authorization;
      axios.defaults.headers.common['Content-Type'] =
        options?.headers?.contentType || 'application/json';
      const res = await axios.post(url, options?.body);
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data: res.data,
          statusCode: res.status,
        });
      }
      return { data: res.data, statusCode: res.status };
    } catch (error) {
      if (isAxiosError(error) && error.response?.status) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status,
        };
      }
      throw new UnexpectedError();
    }
  }
  async put<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      axios.defaults.headers.common.Authorization =
        options?.headers?.authorization;
      axios.defaults.headers.common['Content-Type'] =
        options?.headers?.contentType || 'application/json';
      const res = await axios.put(url, options?.body);
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data: res.data,
          statusCode: res.status,
        });
      }
      return { data: res.data, statusCode: res.status };
    } catch (error) {
      if (isAxiosError(error) && error.response?.status) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status,
        };
      }
      throw new UnexpectedError();
    }
  }
  async delete<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      axios.defaults.headers.common.Authorization =
        options?.headers?.authorization;
      axios.defaults.headers.common['Content-Type'] =
        options?.headers?.contentType || 'application/json';
      const res = await axios.delete(url, options?.body);
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data: res.data,
          statusCode: res.status,
        });
      }
      return { data: res.data, statusCode: res.status };
    } catch (error) {
      if (isAxiosError(error) && error.response?.status) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status,
        };
      }
      throw new UnexpectedError();
    }
  }
  async patch<T = any>(
    url: string,
    options?: HttpServiceOptions,
  ): Promise<HttpServiceResponse<T>> {
    try {
      axios.defaults.headers.common.Authorization =
        options?.headers?.authorization;
      axios.defaults.headers.common['Content-Type'] =
        options?.headers?.contentType || 'application/json';
      const res = await axios.patch(url, options?.body);
      if (res.status >= 400) {
        return await this.interceptors.response.onRejected({
          data: res.data,
          statusCode: res.status,
        });
      }
      return { data: res.data, statusCode: res.status };
    } catch (error) {
      if (isAxiosError(error) && error.response?.status) {
        return {
          data: error.response?.data,
          statusCode: error.response?.status,
        };
      }
      throw new UnexpectedError();
    }
  }
}

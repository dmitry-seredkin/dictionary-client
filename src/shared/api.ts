const enum RequestMethod {
  Delete = "DELETE",
  Get = "GET",
  Post = "POST",
  Put = "PUT",
}

interface RequestOptions extends Omit<RequestInit, "body" | "method"> {
  data?: unknown;
  method?: RequestMethod;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>;
  withAuth?: boolean;
}

class Api {
  private token: string;
  private url: string;

  constructor(token: string, url: string) {
    this.token = token;
    this.url = url;
  }

  private getHeaders = (withAuth = true): Record<string, string> => {
    const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (withAuth) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    return headers;
  };

  private request = async <T>(
    path: string,
    { data, headers, params, withAuth, ...options }: RequestOptions
  ): Promise<T> => {
    const defaultHeaders = this.getHeaders(withAuth);
    headers = { ...defaultHeaders, ...headers };

    params = params ? Object.entries(params).filter(([, value]) => value) : [];

    if (params.length > 0) {
      const url = new URLSearchParams(params);
      path += `?${url.toString()}`;
    }

    const response = await fetch(`${this.url}/api/v1${path}`, {
      ...options,
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  };

  get = async <T>(path: string, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Get });

  post = async <T>(path: string, data: unknown, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Post, data });

  put = async <T>(path: string, data: unknown, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Put, data });

  delete = async <T>(path: string, data: unknown, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Delete, data });
}

export const api = new Api("", "http://localhost:3000");

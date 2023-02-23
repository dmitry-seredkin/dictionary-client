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

type Path = string | number;

type RequestPath = Path | Path[];

class Fetcher {
  // private token: string;
  private url: string;

  constructor(url: string) {
    // this.token = token;
    this.url = url;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private getHeaders = (withAuth = true): Record<string, string> => {
    const headers: Record<string, string> = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // if (withAuth) {
    //   headers.Authorization = `Bearer ${this.token}`;
    // }
    return headers;
  };

  private request = async <T>(
    path: RequestPath,
    { data, headers, params, withAuth, ...options }: RequestOptions
  ): Promise<T> => {
    const defaultHeaders = this.getHeaders(withAuth);
    headers = { ...defaultHeaders, ...headers };

    params = params ? Object.entries(params).filter(([, value]) => value) : [];

    if (Array.isArray(path)) {
      path = path.join("/");
    }

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

  get = <T>(path: RequestPath, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Get });

  post = <T>(path: RequestPath, data: unknown, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Post, data });

  put = <T>(path: RequestPath, data: unknown, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Put, data });

  delete = <T>(path: RequestPath, options?: RequestOptions): Promise<T> =>
    this.request<T>(path, { ...options, method: RequestMethod.Delete });
}

export const fetcher = new Fetcher("http://localhost:3000");

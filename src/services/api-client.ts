import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '89ee7de1ecaf4e3e9ec9d01e66792b7d'
  }
});

export default class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
}

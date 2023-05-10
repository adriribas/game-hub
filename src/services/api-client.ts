import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
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

  get = (id: number | string) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
}

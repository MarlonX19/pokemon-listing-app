import axios, { AxiosResponse, AxiosInstance, Axios } from "axios";
import {
  HttpResponse,
  HttpClient,
  HttpRequest,
} from "@/app/application/protocols/http";

export class AxiosHttpClient implements HttpClient {
  private static instance: AxiosInstance;

  private constructor() {
    AxiosHttpClient.instance = axios.create();
  }

  static getInstance() {
    if (!this.instance) {
      return new AxiosHttpClient();
    }
    return this.instance;
  }

  async request({
    method,
    url,
    body,
    headers,
  }: HttpRequest): Promise<HttpResponse<any>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        data: body,
        headers: { ...headers },
        method,
      });
    } catch (error: any) {
      axiosResponse = error?.response;
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data,
    };
  }
}

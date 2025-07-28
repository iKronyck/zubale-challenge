import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from "axios";
import Constants from "expo-constants";

const API_URL =
  Constants.expoConfig?.extra?.API_URL ??
  "https://662029f13bf790e070af2cd8.mockapi.io/api/";

class ApiClient {
  private static instance: ApiClient;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.get<T>(url, config);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
      }
      throw error;
    }
  }
}

export const apiClient = ApiClient.getInstance();

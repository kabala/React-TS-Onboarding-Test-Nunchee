import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

enum Service {
  nunchee = "https://mychannel.nunchee.tv/api/",
  unsplash = "https://unsplash.com/napi/search/photos?query=movie&xp=&per_page=20&page=1",
}

class Api {
  private static instance: Api;
  private _session: AxiosInstance;

  private constructor() {
    this._session = axios.create({
      baseURL: Service.nunchee,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    if (Api.instance) {
      throw new Error("Error - use Api.getInstance()");
    }
  }

  public static getInstance(): Api {
    Api.instance = Api.instance || new Api();
    return Api.instance;
  }

  private _imageServiceRequest(
    uri: string,
    method: AxiosRequestConfig["method"]
  ) {
    return this._session({ url: uri, baseURL: Service.unsplash, method });
  }

  public async call(
    uri: string,
    method: AxiosRequestConfig["method"],
    imageService = false
  ) {
    try {
      if (imageService) {
        return await this._imageServiceRequest(uri, method);
      }

      return await this._session({ url: uri, method });
    } catch (e) {
      console.log("request error", e);
      return { error: e };
    }
  }
}

export default Api.getInstance();

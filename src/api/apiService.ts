export type Methods =
  | "GET"
  | "POST"
  | "PATCH"
  | "UPDATE"
  | "DELETE"
  | "OPTIONS";

class Api {
  private static instance: Api;

  private constructor() {
    if (Api.instance) {
      throw new Error("Error - use Api.getInstance()");
    }
  }

  public static getInstance(): Api {
    Api.instance = Api.instance || new Api();
    return Api.instance;
  }

  public async call(uri: string = "", method: Methods = "GET") {
    try {
      const request = await fetch(uri, {
        method,
      });
      return await request.json();
    } catch (error) {
      return {
        ok: false,
      };
    }
  }
}

export default Api.getInstance();

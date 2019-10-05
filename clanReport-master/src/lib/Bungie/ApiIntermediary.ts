import { Globals } from "./BungieEnum";
import { DetailedError } from "./CustomErrors";
import { Logger } from "./reimplementation/Logger";

const ApiLogger = Logger.create("API");

const API_KEY = process.env.REACT_APP_API_KEY;

const ServerVars = {
  LocalizerCurrentCultureName: "en",
  SessionContextCookieName: "bungled",
  WebMembershipCookieName: "bungleme",
  PlatformSettings: {
    platformUrl: "https://www.bungie.net/Platform",
    baseUrl: "/",
    locInherit: true,
    internalLinkRegex: /https?\:\/\/(((www)|(stage)|(alpha)|(nike)|(bnetdev)|(bnetint)|(static-internal)|(local-static)|(static01))\.bungie(store)?\.(net|com))/gi
  }
};

export interface PlatformSettings {
  platformUrl: string;
  locInherit: boolean;
}

interface IPlatformSuccessErrorData {
  hasError: boolean;
  platformResponse: PlatformResponse;
}

interface PlatformResponse {
  Response: any;
  ErrorCode: Globals.PlatformErrorCodes;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: any;
}

export enum HttpStatusCodes {
  OK = 200,
  Accepted = 202,
  NoContent = 204,
  MovedPermanently = 301,
  NotModified = 304,
  BadRequest = 400,
  Unauthorized = 401
}

export class ApiIntermediary {
  private static readonly PlatformSettings: PlatformSettings =
    ServerVars.PlatformSettings;

  public static getParamString(params: [string, any][]): string {
    const paramString = params.map(kvp => kvp.join("=")).join("&");

    return `&${paramString}`;
  }

  public static buildUrl(
    path: string,
    requiredParameters?: string,
    optionalQueryAppend?: string
  ) {
    const settings = ApiIntermediary.PlatformSettings;

    const url = settings.platformUrl + path;
    const queryStringGroups = [];

    if (requiredParameters) {
      queryStringGroups.push(requiredParameters);
    }

    if (optionalQueryAppend) {
      queryStringGroups.push(optionalQueryAppend);
    }

    return url + "?" + queryStringGroups.join("&");
  }

  public static buildRequest(
    url: string,
    method: "GET" | "POST",
    input: any = null,
    clientState: any = null
  ): Request {
    const requestInit: RequestInit = {
      method,
      cache: "default",
      headers: {
        "X-API-KEY": API_KEY
      }
    };

    if (input) {
      requestInit.body = JSON.stringify(input);
    }

    const request = new Request(url, requestInit);

    return request;
  }

  public static makeRequest(
    request: RequestInfo,
    isPlatformRequest = true,
    providedOptions?: RequestInit
  ) {
    // Bug 774817 - Edge does not send cookies in fetch requests unless you specifically tell it to
    const fetchOptions: RequestInit = Object.assign({}, providedOptions, {
      credentials: "same-origin"
    } as RequestInit);

    const response = fetch(request, fetchOptions).then(initialResponse => {
      if (!initialResponse.ok) {
        throw initialResponse;
      }

      if (initialResponse.status === HttpStatusCodes.NoContent) {
        return Promise.resolve();
      }

      let jsonResponse = null;
      try {
        jsonResponse = initialResponse.json().catch(e => console.error(e));
      } catch (e) {
        console.error(e);
      }

      return jsonResponse;
    });

    let finalResponse = response;

    if (ApiIntermediary && ApiIntermediary.handleRequest) {
      finalResponse = response.then(jsonResponse => {
        return ApiIntermediary.handleRequest(
          request,
          jsonResponse,
          isPlatformRequest
        );
      });
    }

    return finalResponse.catch(e =>
      ApiIntermediary.handleError(
        request,
        new DetailedError(
          "API Error",
          "An error occured communicating with the server.",
          request,
          e
        )
      )
    );
  }

  /**
   * Called from api.ts, this will run on every API request
   * @param {RequestInfo} request The request
   * @param {any} jsonResponse The response
   */
  public static handleRequest(
    request: RequestInfo,
    jsonResponse: PlatformResponse,
    isPlatformRequest = true
  ): Promise<any> {
    const url = typeof request === "string" ? request : request.url;

    // Log API responses for easy reading
    this.logAsGroup(`Response for ${url}`, jsonResponse);

    return new Promise((resolve, reject) => {
      const successErrorInfo: IPlatformSuccessErrorData = this.reactToResponse(
        jsonResponse
      );

      if (successErrorInfo.hasError) {
        reject(successErrorInfo.platformResponse);
      } else {
        const toReturn = isPlatformRequest
          ? successErrorInfo.platformResponse.Response
          : successErrorInfo.platformResponse;

        resolve(toReturn);
      }
    });
  }

  /**
   * Called from api.ts, this will run if there is any error on an API request
   * @param {RequestInfo} request The request
   * @param {any} error Any error
   */
  public static async handleError(request: RequestInfo, error: DetailedError) {
    ApiLogger.error(error, false, request);

    return Promise.reject(error);
  }

  public static pushGa(subsystem: string, action: string, url: string) {}

  private static reactToResponse(
    platformResponse: PlatformResponse
  ): IPlatformSuccessErrorData {
    return {
      hasError:
        platformResponse.ErrorCode !== undefined &&
        platformResponse.ErrorCode > 1,
      platformResponse: platformResponse
    };
  }

  private static logAsGroup(title: string, logThis: any) {
    if (location.hostname.match("local")) {
      ApiLogger.logVerbose(title, logThis);
    }
  }

  private static getCookieByName(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts
        .pop()
        .split(";")
        .shift();
    }
  }
}

export const HandlePlatformError: (
  error: Error
) => Promise<PlatformResponse> = (error: Error) => {
  return new Promise<PlatformResponse>(resolve => {
    const isError = error instanceof Error;

    let platformError: PlatformResponse = {
      ErrorCode: -1,
      ErrorStatus: "None",
      Message: isError ? error.message : "",
      MessageData: null,
      Response: null,
      ThrottleSeconds: 0
    };

    if ("errorCode" in error) {
      platformError = error as PlatformResponse;
    }

    resolve(platformError);
  });
};

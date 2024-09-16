import axios, { AxiosHeaders, AxiosResponse, HttpStatusCode } from "axios";
import { APiHeaderData, ApiReponseData } from "./network-service-type";

const getBasicHeader = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const processResponse = (response: AxiosResponse<any, any>) => {
  console.log('::::::: ' + JSON.stringify(response))
  if (response.status != HttpStatusCode.Ok 
    && response.status != HttpStatusCode.Accepted
    && response.status != HttpStatusCode.Created) {
    throw new Error("Server error");
  }
  return Promise.resolve({
    headers: getNeededHeadersData(response),
    data: response.data,
  });
};

const getNeededHeadersData = (response: AxiosResponse): APiHeaderData => {
  const headers = response.headers;
  let result = {};
  if (headers instanceof AxiosHeaders) {
    const authorization = headers.get('x-amzn-remapped-authorization');
    const xUid = headers.get('X-Uid')
    if (authorization && authorization.toString() != "" && xUid && xUid.toString() != "") {
      result = {
        xUid: xUid.toString(),
        accesstoken: authorization.toString().replace("Bearer ", ""),
      };
    }
  }
  console.log(':::::: ' + JSON.stringify(headers))
  return result;
};

const getApiPath = (url: string) => {
  return import.meta.env.VITE_API_DOMAIN + '/api/v1' + url
}

export const fetchGet = async (
  url: string,
  extraData: {
    headers: {
      xUid: string,
      accessToken: string
    };
  } | undefined
): Promise<ApiReponseData> => {
  try {
    const response = await axios.get(getApiPath(url), {
      headers: {
        "X-Uid": extraData?.headers?.xUid ? extraData?.headers?.xUid : undefined,
        Authorization: extraData?.headers?.accessToken ? 'Bearer ' + extraData?.headers?.accessToken : undefined,
        ...getBasicHeader(),
        // ...extraData?.headers,
      },
      // withCredentials: true,
    });
    return processResponse(response);
  } catch (err) {
    throw err;
  }
};

export const fetchPost = async (
  url: string,
  body: object,
  extraData: {
    headers: {
      xUid: string,
      accessToken: string
    };
  } | undefined
): Promise<ApiReponseData> => {
  try {
    console.log(':::: extraData?.headers?.accessToken ' + extraData?.headers?.accessToken)
    const response = await axios.post(getApiPath(url), body, {
      headers: {
        "X-Uid": extraData?.headers?.xUid ? extraData?.headers?.xUid : undefined,
        Authorization: extraData?.headers?.accessToken ? 'Bearer ' + extraData?.headers?.accessToken : undefined,
        ...getBasicHeader(),
        // ...extraData?.headers,
      },
      // withCredentials: true
    });
    return processResponse(response);
  } catch (err) {
    throw err;
  }
};

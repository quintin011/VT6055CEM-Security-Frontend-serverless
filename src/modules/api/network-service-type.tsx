export type APiHeaderData = {
    xUid?: string
    accesstoken?: string;
  };
  
  export type ApiReponseData = {
    headers: APiHeaderData;
    data: any;
  };
  
  export enum ApiResponseStatus {
    SUCCESS = "SUCCESS",
    FAIL = "FAIL",
  }
  
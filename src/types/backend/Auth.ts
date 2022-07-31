import { API_TYPES } from '../../enums/uiEnums';

export interface Backend_LoginRequestData {
  type: API_TYPES.AUTH;
  data: {
    attributes: {
      email: string;
      password: string;
    };
  };
}

export interface Backend_LoginResponseData {
  type: API_TYPES.AUTH;
  data: {
    id: number;
    attributes: {
      email: string;
    };
    relationships: {
      token: {
        token: string;
      };
    };
  };
}

export interface Backend_RegisterRequestData extends Backend_LoginRequestData {}

export interface Backend_RegisterResponseData {
  type: API_TYPES.AUTH;
  data: {
    id: number;
    attributes: {
      email: string;
    };
    relationships: {
      token: {
        token: string;
      };
    };
  };
}

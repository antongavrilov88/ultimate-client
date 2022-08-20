export interface LoginRequestData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  id: number;
  email: string;
  token: string;
}

export interface RegisterRequestData extends LoginRequestData {}

export interface RegisterResponseData extends LoginResponseData {}

export type LogoutUserRequest = void;

export type LogoutUserResponse = void;

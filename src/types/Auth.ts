export interface LoginRequestData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  success: boolean;
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

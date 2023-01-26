import { IUser } from ".";

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  username: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export interface IRefreshTokenRequest {
  refreshToken: string;
}

export interface I2FASecret {
  ascii: string;
  hex: string;
  base32: string;
  qr_code_ascii: string;
  qr_code_hex: string;
  qr_code_base32: string;
  google_auth_qr: string;
  otpauth_url: string;
}

export interface ITotpTokenRequest {
  userToken: string;
}

export interface ChangePwdRequest {
  email: string;
  currentPwd: string;
  newPwd: string;
  confirmPwd: string;
}

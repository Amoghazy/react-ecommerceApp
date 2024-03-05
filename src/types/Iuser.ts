export interface IAddress {
  country: string;
  city: string;
  state: string;
  zipCode: string;
}
export interface IUserRegistration {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  // address: IAddress; // Update to reference the IAddress type directly
}
export interface dataToApi {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: IAddress[];
}
export type LoginData = {
  email: string;
  password: string;
};
export type forgetPasswordData = {
  email: string;
  newPassword: string;
  confirmPassword: string;
};
export interface ApiResponseError {
  status: string;

  error?: string;
}
 export interface ApiResponseSuccess {
  status: string;

  token: string;
}
import Cookies from "js-cookie";
import axios from "axios";

const authCookieKey = "authorization-token";

const rememberMeKey = "remember-me-token";

export default class AuthService {
  static isLoggedIn = () => !!Cookies.get(authCookieKey);

  static logout = () => {
    Cookies.remove(authCookieKey);
    Cookies.remove(rememberMeKey);
  };

  static getToken = () => {
    return Cookies.get(authCookieKey);
  };

  static setRememberToken = (token) => {
    return Cookies.set(rememberMeKey, token);
  };

  static getRememberToken = () => {
    return Cookies.get(rememberMeKey);
  };

  static setCookie = (token) => {
    return Cookies.set(authCookieKey, token);
  };

  static getFullToken = () => {
    return `Bearer ${Cookies.get(authCookieKey)}`;
  };

  static async login(apiUrl, params) {
    const apiEndpoint = `${apiUrl}/login`;
    const returnValues = {
      token: null,
      remember: null,
      message: "",
      errors: {},
    };
    return axios
      .post(apiEndpoint, params)
      .then((resp) => {
        returnValues.token = resp?.data?.token ?? null;
        returnValues.remember = resp?.data.remember_token ?? null;
        returnValues.message = resp?.data.message ?? null;
        returnValues.errors = resp?.data.errors ?? null;
        return returnValues;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  static async rememberLogin(apiUrl, token) {
    const apiEndpoint = `${apiUrl}/remember`;

    return axios
      .post(apiEndpoint, token)
      .then((resp) => {
        const token = resp?.data?.token ?? null;
        return token;
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  }
}

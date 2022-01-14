/**
 * Auth Service
 *
 * Enthält Funktionen zur Autorisierung und setzen von Cookies
 *
 * -Check ob Authorization Token gesetzt ist
 * -Authorization Cookie setzen
 * -Authorization Cookie und Remember Cookie entfernen
 * -Authorization Cookie abrufen
 * -Remember Cookie setzen
 * -Remember Cookie abrufen
 * -Bearer Token erstellen
 * -User einloggen
 * -User mit Remember Token einloggen
 * -User registrieren
 *
 */

/**
 * Axios und Cookie Plugin importieren
 */
import Cookies from "js-cookie";
import axios from "axios";

/**
 * Konstante für Authorization Token und Remember Token deklarieren
 */
const authCookieKey = "authorization-token";
const rememberMeKey = "remember-me-token";

export default class AuthService {
  /**
   * Check ob Authorization Token gesetzt ist
   *
   * @returns Authorization Cookie
   */
  static isLoggedIn = () => !!Cookies.get(authCookieKey);

  /**
   * Authorization Cookie setzen
   * @param {*} token
   */
  static setCookie = (token) => {
    return Cookies.set(authCookieKey, token);
  };

  /**
   * Authorization Cookie und Remember Cookie entfernen
   */
  static logout = () => {
    Cookies.remove(authCookieKey);
    Cookies.remove(rememberMeKey);
  };

  /**
   * Authorization Cookie abrufen
   */
  static getToken = () => {
    return Cookies.get(authCookieKey);
  };

  /**
   * Remember Cookie setzen
   * @param {*} token
   */
  static setRememberToken = (token) => {
    return Cookies.set(rememberMeKey, token);
  };

  /**
   * Remember Cookie abrufen
   */
  static getRememberToken = () => {
    return Cookies.get(rememberMeKey);
  };

  /**
   * Bearer Token erstellen
   *
   * @returns Bearer Token
   */
  static getFullToken = () => {
    return `Bearer ${Cookies.get(authCookieKey)}`;
  };

  /**
   * User einloggen
   *
   * @param {*} apiUrl
   * @param {*} params
   * @returns Authorization Token
   * @returns Remember Token wenn gewählt
   * @returns Success Message
   * @returns Error Message
   */
  static async login(apiUrl, params) {
    const apiEndpoint = `${apiUrl}/login`;
    const returnValues = {
      token: null,
      remember: null,
      message: "",
      errors: {},
    };
    return await axios
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

  /**
   * User mit Remember Token einloggen
   *
   * @param {*} apiUrl
   * @param {*} token
   * @returns Authorization Token
   */
  static async rememberLogin(apiUrl, token) {
    const apiEndpoint = `${apiUrl}/remember`;
    return await axios
      .post(apiEndpoint, token)
      .then((resp) => {
        const token = resp?.data?.token ?? null;
        return token;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * User registrieren
   *
   * @param {*} apiUrl
   * @param {*} params
   * @returns Authorization Token
   */
  static async register(apiUrl, params) {
    const apiEndpoint = `${apiUrl}/register`;
    return await axios
      .post(apiEndpoint, params)
      .then((resp) => {
        const token = resp?.data?.token ?? null;
        return token;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }
}

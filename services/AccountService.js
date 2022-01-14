/**
 * Account Service
 *
 * Enthält Funktionen der Account Page
 *
 * -Password reset Email versenden
 * -Neues Passwort abschicken
 * -Accountdaten ändern
 * -Abo ändern
 * -Account löschen
 *
 */

/**
 * Axios Plugin importieren
 */
import axios from "axios";

export default class AccountService {
  /**
   * Passwort Reset Email versenden.
   *
   * @param {*} apiUrl
   * @param {*} email
   * @returns Success Messgage
   * @return Error Message
   */
  static async sendPasswordResetMail(apiUrl, email) {
    const apiEndpoint = `${apiUrl}/password/email`;
    const request = {
      email: email,
    };
    return await axios
      .post(apiEndpoint, request)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e;
      });
  }

  /**
   * Neues Passwort abschicken
   *
   * Enthält Token aus der URL, E-Mail und neues Passwort
   *
   * @param {*} apiUrl
   * @param {*} form
   * @param {*} headers
   * @returns Success Message
   * @returns Error Message
   */
  static async resetPassword(apiUrl, form, { headers }) {
    const apiEndpoint = `${apiUrl}/password/reset`;
    return await axios
      .post(apiEndpoint, form, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * Accountdaten ändern
   *
   * Enthält neuen Username oder neue E-Mail
   *
   * @param {*} apiUrl
   * @param {*} form
   * @param {*} headers
   * @returns Success Message
   * @returns Error Message
   */
  static async editAccount(apiUrl, form, { headers }) {
    const apiEndpoint = `${apiUrl}/account/edit`;
    return await axios
      .put(apiEndpoint, form, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * Abo ändern
   *
   * Enthält neues Abo
   *
   * @param {*} apiUrl
   * @param {*} abo
   * @param {*} headers
   * @returns Success Message
   * @returns Error Message
   */
  static async changeAbo(apiUrl, abo, { headers }) {
    const apiEndpoint = `${apiUrl}/account/abo`;
    return await axios
      .put(apiEndpoint, abo, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * Account löschen
   *
   * @param {*} apiUrl
   * @param {*} param1
   * @returns Success Message
   * @returns Error Message
   */
  static async deleteAccount(apiUrl, { headers }) {
    const apiEndpoint = `${apiUrl}/account/delete`;
    return await axios
      .delete(apiEndpoint, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }
}

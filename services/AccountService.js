import axios from "axios";

export default class AccountService {
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

  static async editAccount(apiUrl, form, { headers }) {
    const apiEndpoint = `${apiUrl}/account/edit`;
    return await axios
      .put(apiEndpoint, form, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async changeAbo(apiUrl, abo, { headers }) {
    const apiEndpoint = `${apiUrl}/account/abo`;
    return await axios
      .put(apiEndpoint, abo, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async deleteAccount(apiUrl, { headers }) {
    const apiEndpoint = `${apiUrl}/account/delete`;
    return await axios
      .delete(apiEndpoint, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e;
      });
  }
}

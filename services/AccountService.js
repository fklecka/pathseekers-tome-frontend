import Cookies from "js-cookie";
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
}

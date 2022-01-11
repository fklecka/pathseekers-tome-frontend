import AuthService from "../services/AuthService";

const config = {
  // apiUrl: "https://cryptic-lowlands-38385.herokuapp.com/api/",
  apiUrl: "http://localhost/api",
  headers: {
    headers: {
      Authorization: AuthService.getFullToken(),
    },
  },
};

export default config;

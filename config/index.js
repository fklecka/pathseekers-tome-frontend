import AuthService from "../services/AuthService";

const config = {
  apiUrl: "https://pathseekers-tome-api.herokuapp.com/api",
  serverUrl: "https://pathseekers-tome-api.herokuapp.com",
  headers: {
    headers: {
      Authorization: AuthService.getFullToken(),
    },
  },
};

export default config;

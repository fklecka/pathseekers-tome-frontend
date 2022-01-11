import AuthService from "../services/AuthService";

const config = {
  apiUrl: "https://pathseekers-tome-api.herokuapp.com/api",
  headers: {
    headers: {
      Authorization: AuthService.getFullToken(),
    },
  },
};

export default config;

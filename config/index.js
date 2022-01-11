import AuthService from "../services/AuthService";

const config = {
  apiUrl: "https://angry-dubinsky-8666f4.netlify.app/api",
  headers: {
    headers: {
      Authorization: AuthService.getFullToken(),
    },
  },
};

export default config;

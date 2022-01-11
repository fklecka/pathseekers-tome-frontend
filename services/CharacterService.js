import axios from "axios";

export default class CharacterService {
  static async getCharacters(apiUrl, { headers }) {
    const apiEndpoint = `${apiUrl}/characters`;
    return await axios
      .get(apiEndpoint, headers)
      .then((resp) => {
        const characters = resp?.data;
        return characters;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async saveCharacter(apiUrl, character, { headers }) {
    const apiEndpoint = `${apiUrl}/characters`;
    return await axios
      .post(apiEndpoint, character, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async updateCharacter(apiUrl, character, { headers }) {
    const apiEndpoint = `${apiUrl}/characters`;
    return await axios
      .put(apiEndpoint, character, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e;
      });
  }

  static async deleteCharacter(apiUrl, characterId, { headers }) {
    const apiEndpoint = `${apiUrl}/characters/${characterId}`;
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

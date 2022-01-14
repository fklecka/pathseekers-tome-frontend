/**
 * Charakter Service
 *
 * Enthält Funktionen für Charaktere serverseitig
 *
 * -Charaktere Abrufen
 * -Neuen Charakter speichern
 * -Charakter aktualisieren
 * -Charakter löschen
 *
 */

/**
 * Axios Plugin importieren
 */
import axios from "axios";

export default class CharacterService {
  /**
   * Charakter von API abrufen
   *
   * @param {*} apiUrl
   * @param {*} param1
   * @returns Success Message
   * @returns Error Message
   */
  static async getCharacters(apiUrl, { headers }) {
    const apiEndpoint = `${apiUrl}/characters`;
    return await axios
      .get(apiEndpoint, headers)
      .then((resp) => {
        const characters = resp?.data;
        return characters;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * Neuen Charakter speichern
   *
   * @param {*} apiUrl
   * @param {*} character
   * @param {*} Headers
   * @returns Success Message
   * @returns Error Message
   */
  static async saveCharacter(apiUrl, character, { headers }) {
    const apiEndpoint = `${apiUrl}/characters`;
    return await axios
      .post(apiEndpoint, character, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * Charakter aktualisieren
   *
   * @param {*} apiUrl
   * @param {*} character
   * @param {*} param2
   * @returns Success Message
   * @returns Error Message
   */
  static async updateCharacter(apiUrl, character, { headers }) {
    const apiEndpoint = `${apiUrl}/characters/${character.id}`;
    return await axios
      .put(apiEndpoint, character, headers)
      .then((resp) => {
        const response = resp?.data ?? null;
        return response;
      })
      .catch((e) => {
        throw e.response.data;
      });
  }

  /**
   * Charakter löschen
   *
   * @param {*} apiUrl
   * @param {*} characterId
   * @param {*} headers
   * @returns Success Message
   * @returns Error Message
   */
  static async deleteCharacter(apiUrl, characterId, { headers }) {
    const apiEndpoint = `${apiUrl}/characters/${characterId}`;
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

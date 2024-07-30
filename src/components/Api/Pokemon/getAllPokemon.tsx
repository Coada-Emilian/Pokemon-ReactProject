// eslint-disable-next-line prettier/prettier
import axios from 'axios';
// eslint-disable-next-line prettier/prettier
import apiBaseUrl from '../config';

// Fetching all pokemon
export default async function getAllPokemon() {
  try {
    const response = await axios.get(`${apiBaseUrl}/pokemon`);

    if (response.status !== 200) {
      console.log(response);
      return null;
    }

    const pokemon = response.data;

    if (!pokemon) {
      // eslint-disable-next-line prettier/prettier
      console.log('error');
      return null;
    }
    return pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}

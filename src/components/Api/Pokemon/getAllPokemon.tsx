import axios from 'axios';
import apiBaseUrl from '../config';

// Fetching all pokemon
export default async function getAllPokemon() {
  try {
    const response = await axios.get(`${apiBaseUrl}/pokemon`);

    if (response.status !== 200) {
      console.error('Unexpected status code:', response.status);
      return null;
    }

    const pokemon = response.data;

    if (!pokemon) {
      console.error('error');
      return null;
    }
    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return null;
  }
}

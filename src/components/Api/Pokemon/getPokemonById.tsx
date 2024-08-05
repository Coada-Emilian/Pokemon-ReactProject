import axios from 'axios';
import apiBaseUrl from '../config';
import { IPokemon } from '../../../@types/types';

// Fetching pokemon by id
export default async function getPokemonById(
  id: number
): Promise<IPokemon | null> {
  try {
    const response = await axios.get(`${apiBaseUrl}/pokemon/${id}`);

    if (response.status !== 201) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }

    const pokemon = response.data;

    if (!pokemon) {
      console.error('No data received for the requested Pokémon');
      return null;
    }

    return pokemon;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

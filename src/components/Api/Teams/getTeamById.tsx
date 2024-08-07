import axios from 'axios';
import apiBaseUrl from '../config';
import { ITeam } from '../../../@types/types';

// Fetching team by id
export default async function getTeamById(id: number): Promise<ITeam | null> {
  try {
    const response = await axios.get<ITeam>(`${apiBaseUrl}/teams/${id}`);

    if (response.status !== 201) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }

    const foundTeam = response.data;

    if (!foundTeam) {
      console.error('No data received for the requested Pokémon');
      return null;
    }

    return foundTeam;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

import axios from 'axios';
import apiBaseUrl from '../config';
import { ITeam } from '../../../@types/types';

// Fetching all teams
export default async function getAllTeams(): Promise<ITeam[] | null> {
  try {
    const response = await axios.get<ITeam[]>(`${apiBaseUrl}/teams`);

    if (response.status !== 200) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }

    const teams = response.data;

    if (!teams || teams.length === 0) {
      console.error('No teams data received from the API');
      return null;
    }

    return teams;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Axios error occurred while fetching teams:',
        error.message
      );
    } else {
      console.error('Unexpected error occurred while fetching teams:', error);
    }
    return null;
  }
}

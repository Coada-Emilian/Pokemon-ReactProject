import axios from 'axios';
import apiBaseUrl from '../config';
import { ITeam } from '../../../@types/types';

export default async function updateTeamById(
  id: number,
  avatarSourceId: number
): Promise<ITeam | null> {
  try {
    const response = await axios.get<ITeam>(`${apiBaseUrl}/teams/${id}`);

    if (response.status !== 200) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }

    const team = response.data;
    console.log(team);

    // team.avatarSouceId? = avatarSourceId

    if (!team) {
      console.error('No data received for the requested Pokémon');
      return null;
    }

    return team;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}

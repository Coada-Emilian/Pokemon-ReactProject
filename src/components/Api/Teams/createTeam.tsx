import axios from 'axios';
import apiBaseUrl from '../config';
import { ITeam } from '../../../@types/types';

interface CreateTeamProps {
  name: string;
  description: string;
}

export default async function createTeam({
  name,
  description,
}: CreateTeamProps): Promise<ITeam | null> {
  try {
    const response = await axios.post<ITeam>(`${apiBaseUrl}/teams`, {
      name,
      description,
    });

    if (response.status !== 201) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }
    const team = response.data;
    if (!team) {
      console.error('No data received after team creation');
      return null;
    }

    return team;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred while creating team:', error.message);
    } else {
      console.error('Unexpected error occurred while creating team:', error);
    }
    return null;
  }
}

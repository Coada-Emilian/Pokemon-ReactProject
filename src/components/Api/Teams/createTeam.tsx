/* eslint-disable object-shorthand */
// eslint-disable-next-line prettier/prettier
import axios from 'axios';
import apiBaseUrl from '../config';

interface CreateTeamProps {
  name: string;
  description: string;
}

export default async function createTeam({
  name,
  description,
}: CreateTeamProps): Promise<string | null> {
  try {
    const response = await axios.post(`${apiBaseUrl}/teams`, {
      name,
      description,
    });

    if (response.status !== 201) {
      console.log(response);
      return null;
    }
    const team = response.data;
    if (!team) {
      // eslint-disable-next-line prettier/prettier
      console.log('error');
      return null;
    }

    return team;
  } catch (error) {
    console.error(error);
    return null;
  }
}

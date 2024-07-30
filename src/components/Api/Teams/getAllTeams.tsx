// eslint-disable-next-line prettier/prettier
import axios from 'axios';
// eslint-disable-next-line prettier/prettier
import apiBaseUrl from '../config';

// Fetching all teams
export default async function getAllTeams() {
  try {
    const response = await axios.get(`${apiBaseUrl}/teams`);

    if (response.status !== 200) {
      console.log(response);
      return null;
    }

    const teams = response.data;
    if (!teams) {
      // eslint-disable-next-line prettier/prettier
      console.log('error');
      return null;
    }
    return teams;
  } catch (error) {
    console.error(error);
    return null;
  }
}

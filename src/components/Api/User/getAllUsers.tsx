import axios from 'axios';
import apiBaseUrl from '../config';

// Fetching all users
export default async function getAllUsers() {
  try {
    const response = await axios.get(`${apiBaseUrl}/users`);

    if (response.status !== 200) {
      console.error('Unexpected status code:', response.status);
      return null;
    }

    const users = response.data;

    if (!users) {
      console.error('error');
      return null;
    }
    return users;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return null;
  }
}

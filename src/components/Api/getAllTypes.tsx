import axios from 'axios';
import apiBaseUrl from './config';

// Fetching all types
export default async function getAllTypes() {
  try {
    const response = await axios.get(`${apiBaseUrl}/types`);

    if (response.status !== 200) {
      console.log(response);
      return null;
    }

    const foundTypes = response.data;

    if (!foundTypes) {
      console.log('error');
      return null;
    }

    return foundTypes;
  } catch (error) {
    console.error(error);
    return null;
  }
}

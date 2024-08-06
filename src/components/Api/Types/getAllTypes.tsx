import axios from 'axios';
import apiBaseUrl from '../config';
import { IType } from '../../../@types/types';

// Fetching all types
export default async function getAllTypes(): Promise<IType[] | null> {
  try {
    const response = await axios.get<IType[]>(`${apiBaseUrl}/types`);

    if (response.status !== 200) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }

    const foundTypes: IType[] = response.data;

    if (!foundTypes || foundTypes.length === 0) {
      console.error('No types data received from the API');
      return null;
    }

    return foundTypes;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Axios error occurred while fetching types:',
        error.message
      );
    } else {
      console.error('Unexpected error occurred while fetching types:', error);
    }
    return null;
  }
}

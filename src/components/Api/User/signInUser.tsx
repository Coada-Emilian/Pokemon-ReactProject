import axios from 'axios';
import apiBaseUrl from '../config';
import { IUser } from '../../../@types/types';

interface SignInUserProps {
  email: string;
  password: string;
}

export default async function signInUser({
  email,
  password,
}: SignInUserProps): Promise<IUser | null> {
  try {
    const response = await axios.post<IUser>(`${apiBaseUrl}/signIn`, {
      email,
      password,
    });
    if (response.status !== 201) {
      console.error(`Unexpected response status: ${response.status}`);
      return null;
    }
    const user = response.data;

    if (!user) {
      console.error('No data received for the requested user');
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error d'authentification :", error);
    return null;
  }
}

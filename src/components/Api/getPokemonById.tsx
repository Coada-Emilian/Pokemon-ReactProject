import axios from "axios";
import apiBaseUrl from "./config";

//Fetching all pokemon
export default async function getPokemonById(id: number) {
  try {
    const response = await axios.get(`${apiBaseUrl}/pokemon/${id}`);

    const pokemon = response.data;

    if (!pokemon) {
      console.log("error");
      return null;
    }

    return pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}

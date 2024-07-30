// eslint-disable-next-line prettier/prettier
import axios from "axios";

// Fetching all pokemon from Api
export default async function getAllPokemonApi() {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=1025"`
    );

    if (response.status !== 200) {
      console.log(response);
      return null;
    }

    const pokemon = response.data;

    if (!pokemon) {
      // eslint-disable-next-line prettier/prettier
      console.log("error");
      return null;
    }
    return pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}

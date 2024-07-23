import axios from "axios";

//Fetching all pokemon
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
      console.log("error");
      return null;
    }
    return pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}
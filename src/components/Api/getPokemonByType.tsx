// import axios from "axios";
// import apiBaseUrl from "./config";
// import { IPokemon } from "../../@types/types";

// //Fetching pokemon by type
// export default async function getPokemonByType(typeId: number, allPokemons:IPokemon[]) {
//   try {
//     const typeResponse = await axios.get(`${apiBaseUrl}/types`);

//     const pokemon = response.data;

//     if (!pokemon) {
//       console.log("error");
//       return null;
//     }

//     return pokemon;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

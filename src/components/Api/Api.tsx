import apiBaseUrl from "./config";

//Fetching all pokemon
async function getAllPokemon() {
    try {
        const httpResponse = await fetch(`${apiBaseUrl}/pokemon`);

        if (! httpResponse.ok) {
        console.log(httpResponse);
        return null; 
        }

        const pokemon = await httpResponse.json();

        if(!pokemon) {
          console.log("error");
          return null;
      }
        return pokemon;
    } catch (error) {
        console.error(error);
        return null;
      }
}

export default getAllPokemon;
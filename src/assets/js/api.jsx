import { apiBaseUrl } from "./config.js";

//Fetching all pokemon
export default async function getAllPokemon() {
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

//Fetching a pokemon based on it's id
export async function getPokemonById(id) {
    try {
        const httpResponse = await fetch(`${apiBaseUrl}/pokemon/${id}`);

        if (! httpResponse.ok) {
            console.log(httpResponse);
            return null; 
        };

        const foundPokemon = await httpResponse.json();

        if(!foundPokemon) {
          console.log("error");
          return null;
      }
        return foundPokemon;
    } catch (error) {
        console.error(error);
        return null;
      }
}

//Fetching all types
export async function getAllTypes() {
    try {
        const httpResponse = await fetch(`${apiBaseUrl}/types`);

        if (! httpResponse.ok) {
            console.log(httpResponse);
            return null; 
        };

        const foundTypes = await httpResponse.json();

        if(!foundTypes) {
          console.log("error");
          return null;
      }
        return foundTypes;
    } catch (error) {
        console.error(error);
        return null;
    }
}

//Fetching pokemon by type
export async function getPokemonByType(typeName) {
    try {
        const httpResponse = await fetch(`${apiBaseUrl}/pokemon`);
        if (! httpResponse.ok) {
        console.log(httpResponse);
        return null; 
        }
        const pokemons = await httpResponse.json();
        if(!pokemons) {
          console.log("error");
          return null;
      }
        const filteredPokemon= pokemons.filter((pokemon) => pokemon.types.find((type) => type.name === typeName))
        if(!filteredPokemon) {
            console.log("error");
            return null;
        }
        return filteredPokemon;
    } catch (error) {
        console.error(error);
        return null;
      }
}

//Fetching a pokemon via search bar
export async function findPokemonByName(data) {
  try {
    const url = new URL(`${apiBaseUrl}/search`);
    url.searchParams.append('term', data.term); 
    const httpResponse = await fetch(url, {
      headers: { "Content-Type": "application/json" }
    });
    if (!httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    const foundPokemon = await httpResponse.json();
    if (!foundPokemon) {
      console.log("error");
      return null;
    }
    return foundPokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Fetching all teams
export async function getAllTeams() {
    try {
        const httpResponse = await fetch(`${apiBaseUrl}/teams`);
        if (! httpResponse.ok) {
        console.log(httpResponse);
        return null; 
        }
        const teams = await httpResponse.json();
        if(!teams) {
          console.log("error");
          return null;
      }
        return teams;
    } catch (error) {
        console.error(error);
        return null;
      }
}

//Adding a team
export async function postTeam(newTeamData) {
    try {
      const httpResponse = await fetch(`${apiBaseUrl}/teams`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTeamData)
      });
      if (! httpResponse.ok) {
        console.log(httpResponse);
        return null;
      }
      const createdTeam = await httpResponse.json();
      if(!createdTeam) {
        console.log("error");
        return null;
    }
      return createdTeam;
    } catch (error) {
      console.error(error);
      return null;
    }
}

//Adding one pokemon to a team based on their id's
export async function addPokemonToTeam(teamId, pokemonId) {
    try {
        const httpResponse = await fetch(`${apiBaseUrl}/pokemon/${teamId}/${pokemonId}`, {
            method: "PATCH"
          });

        if (! httpResponse.ok) {
            console.log(httpResponse);
            return null;
          }
        return console.log("Pokemon added");    
    } catch (error) {
      console.error(error);
      return null;
    }
}

//Removing one pokemon from a team based on their id's
export async function removePokemonFromTeam(teamId, pokemonId) {
  try {
      const httpResponse = await fetch(`${apiBaseUrl}/pokemon/${teamId}/${pokemonId}`, {
          method: "DELETE"
        });
      if (! httpResponse.ok) {
          console.log(httpResponse);
          return null;
        }
      return console.log("Pokemon removed");   
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Modifying team name
export async function editTeamName(teamId, newNameData) {
  try{
    const httpResponse = await fetch(`${apiBaseUrl}/teams/${teamId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNameData)
    });
    if (! httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    return console.log("Team name changed");
  } catch (error) {
    console.error(error);
    return null;
  }
}

//Deleting Team
export async function deleteTeamById(teamId) {
  try{
    const httpResponse = await fetch(`${apiBaseUrl}/teams/${teamId}`, {
      method: "DELETE"
    });
    if (! httpResponse.ok) {
      console.log(httpResponse);
      return null;
    }
    return console.log("Team deleted");   
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getTeamById(id) {
  try {
      const httpResponse = await fetch(`${apiBaseUrl}/teams/${id}`);

      if (! httpResponse.ok) {
          console.log(httpResponse);
          return null; 
      };

      const foundTeam = await httpResponse.json();

      if(!foundTeam) {
        console.log("error");
        return null;
    }
      return foundTeam;
  } catch (error) {
      console.error(error);
      return null;
    }
}


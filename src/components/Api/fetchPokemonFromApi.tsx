export default function fetchPokemonFormApi() {
  // const [pokemonApi, setPokemonApi] = useState<IPokemonAPI>({
  //   count: 0,
  //   next: "",
  //   previous: null,
  //   results: [],
  // });
  // useEffect(() => {
  //   const fetchPokemonDataFromApi = async () => {
  //     const data = await getAllPokemonApi();
  //     if (data) {
  //       setPokemonApi(data);
  //     } else {
  //       console.log("Failed to fetch Pokemon data");
  //     }
  //   };
  //   fetchPokemonDataFromApi();
  // }, []);
  // const pokemonsInApi = [...pokemonApi.results];
  // const fetchPokemonDetails = async (pokemon) => {
  //   const data = await getApiPokemonDetails(pokemon.url);
  //   if (data) {
  //     return data;
  //   } else {
  //     console.log("Failed to fetch data");
  //   }
  // };
  // pokemonsInApi.forEach(async (pokemon) => {
  //   const id = parseInt(pokemon.url.slice(34));
  //   pokemon.id = id;
  //   const data = await fetchPokemonDetails(pokemon);
  //   pokemon.abilities = data.abilities;
  //   pokemon.base_experience = data.base_experience;
  //   pokemon.cries = data.cries;
  //   pokemon.forms = data.forms;
  //   pokemon.game_indices = data.game_indices;
  //   pokemon.height = data.height;
  //   pokemon.held_items = data.held_items;
  //   pokemon.id = data.id;
  //   pokemon.is_default = data.is_default;
  //   pokemon.location_area_encounters = data.location_area_encounters;
  //   pokemon.moves = data.moves;
  //   pokemon.name = data.name;
  //   pokemon.order = data.order;
  //   pokemon.past_abilities = data.past_abilities;
  //   pokemon.past_types = data.past_types;
  //   pokemon.species = data.species;
  //   pokemon.sprites = data.sprites;
  //   pokemon.stats = data.stats;
  //   pokemon.types = data.types;
  //   pokemon.weight = data.weight;
  // });
}

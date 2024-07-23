import axios from "axios";

//fetch pokemon details from api
export default async function getApiPokemonDetails(url: string) {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      console.log(response);
      return null;
    }

    const data = response.data;

    if (!data) {
      console.log("error");
      return null;
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

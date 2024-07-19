import apiBaseUrl from "./config";

//Fetching all types
export default async function getAllTypes() {
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
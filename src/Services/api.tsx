import axios from 'axios';
import { BasicPokemonData } from '../Utilis/pokemonInterfaces';

export const endpointAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
    data: "fields id,name,species,sprites;"
  });


  export const getPokemon = async(pokemonName: number | string) => {
    let {data} = await endpointAPI.get(pokemonName.toString());
    const {id, name, species, sprites} = data;
    const pokemon: BasicPokemonData = {id: id, name: name, species: species, sprites: sprites};
    console.log(pokemon);
    return pokemon;
}
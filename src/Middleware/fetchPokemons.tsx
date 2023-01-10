import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from '../Services/api';
import { BasicPokemonData } from "../Utilis/pokemonInterfaces";

// create a async thunk using createAsyncThunk
export const fetchPokemon = createAsyncThunk<
  // type arguements
  BasicPokemonData,
  {pokemonName: string}
>("pokemon/fetchPokemon", async (payload, thunkApi) => {
  // hit endpoint using axios
  const response = await getPokemon(payload.pokemonName);
  // return response data with type
  console.log('This is the response: ', response);
  return response as BasicPokemonData;
});
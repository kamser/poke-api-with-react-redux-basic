import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from '../Config/store'
import { RootState } from '../Config/store'
import { PokemonState } from '../Utilis/reduxModels'
import { getPokemon } from '../Services/api';
import { BasicPokemonData } from '../Utilis/pokemonInterfaces';
import { fetchPokemon } from './fetchPokemons';

export const initialState: PokemonState = {
    pokemon: null,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, { payload }: PayloadAction<BasicPokemonData>) => {
            payload 
                    ? state.pokemon = {...payload}
                    : state.pokemon = null;

        },
    },
    extraReducers: (builder) => {
        // when send a request, fetchWeatherForecast is pending
        builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => {
          // change status to loading and clear previous errors
          state.pokemon = {...payload};
        });
      },
});

export const {setPokemon} = pokemonSlice.actions;

export default pokemonSlice.reducer;

export const pokemonSelector = (state: RootState) => state.pokemon;   //A la variable que se quiere poder acceder con este selector, ya que el estado puede llegar a tener varias variables y por tanto, se pueden crear varios selectores.
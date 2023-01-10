import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import PokemonCardItem from '../Components/cardItem';
import CustomForm from '../Components/customForm';
import { getPokemon } from '../Services/api';
import { BasicPokemonData} from '../Utilis/pokemonInterfaces';
import { pokemonSelector } from '../Middleware/pokemonSlice';
import { useAppDispatch, useAppSelector } from '../Utilis/hooks';
import { fetchPokemon } from '../Middleware/fetchPokemons';

const Home = () => {
    const [formValue, setFormValue] = useState<string>("");
    const handleOnSubmit = async(event: Event | any) => {
        event.preventDefault();
        console.log(formValue.toLocaleLowerCase());
        if(formValue !== ""){
            let pokemon: BasicPokemonData = await getPokemon(formValue.toLocaleLowerCase());
        }
    }

    const dispatch = useAppDispatch();
    const {pokemon} = useAppSelector(pokemonSelector);

    const handleOnSubmit2 = async(event: Event | any) => {
        event.preventDefault();
        if(formValue !== ""){
            dispatch(fetchPokemon({pokemonName: formValue}));
        }
    }

    return (
        <Stack direction="vertical" className="col-md-2 mx-auto my-5" gap={5}>
            <CustomForm handleOnSubmit={handleOnSubmit2} setFormValue={setFormValue} formValue={formValue}></CustomForm>
            <PokemonCardItem pokemonData={pokemon}></PokemonCardItem>
        </Stack>
    );

};


export default Home;
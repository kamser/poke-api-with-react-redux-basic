import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import PokemonCardItem from '../Components/cardItem';
import CustomForm from '../Components/customForm';
import { getPokemon } from '../Services/api';
import { BasicPokemonData} from '../Utilis/pokemonInterfaces';

const Home = () => {
    const [pokemon, setPokemon] = useState<BasicPokemonData | null>(null);
    const [formValue, setFormValue] = useState<string>("");
    const handleOnSubmit = async(event: Event | any) => {
        event.preventDefault();
        console.log(formValue.toLocaleLowerCase());
        if(formValue !== ""){
            let pokemon: BasicPokemonData = await getPokemon(formValue.toLocaleLowerCase());
            setPokemon(pokemon);
        }
    }

    return (
        <Stack direction="vertical" className="col-md-2 mx-auto my-5" gap={5}>
            <CustomForm handleOnSubmit={handleOnSubmit} setFormValue={setFormValue} formValue={formValue}></CustomForm>
            <PokemonCardItem pokemonData={pokemon}></PokemonCardItem>
        </Stack>
    );

};


export default Home;
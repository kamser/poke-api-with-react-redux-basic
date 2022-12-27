import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardItemProps } from '../Utilis/itemCardInterface';

const PokemonCardItem = (props: CardItemProps) => {
    const {pokemonData} = props;
    

    return (
        <>
            {pokemonData ? 
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={pokemonData.sprites.front_default} />
                        <Card.Body>
                            <Card.Title>{pokemonData.name}</Card.Title>
                            <Card.Text>
                                {pokemonData.species.color}
                            </Card.Text>
                            <Button variant="primary">Mas informacion</Button>
                        </Card.Body>
                    </Card>
                :
                    <></>
            }
        </>
        
    );
}

export default PokemonCardItem;
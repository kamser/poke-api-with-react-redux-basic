import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomFormProps } from '../Utilis/customFormInterface';

const CustomForm = (props: CustomFormProps) => {
    const {handleOnSubmit, setFormValue, formValue} = props;
  return (
    <Form data-testid="custom-form" onSubmit={(e: Event | any)=>handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label name="poke-label">Pokemon Name:</Form.Label>
            <Form.Control name="pokeInput" type="text" placeholder="Enter a valid Pokemon name" value={formValue} onChange={event => setFormValue(event.target.value)}/>
        </Form.Group>
        <Button name="search-btn" variant="primary" type="submit" >
            Search
        </Button>
    </Form>
  );
}

export default CustomForm;
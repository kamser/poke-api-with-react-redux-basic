import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomFormProps } from '../Utilis/customFormInterface';

const CustomForm = (props: CustomFormProps) => {
    const {handleOnSubmit, setFormValue, formValue} = props;
  return (
    <Form onSubmit={(e: Event | any)=>handleOnSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pokemon Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter a valid Pokemon name" value={formValue} onChange={event => setFormValue(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Search
        </Button>
    </Form>
  );
}

export default CustomForm;
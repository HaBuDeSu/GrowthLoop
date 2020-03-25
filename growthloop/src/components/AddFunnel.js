import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import axios from 'axios';

const AddFunnel = () => {

    const [funnel, setFunnel] = useState({

    })

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://growthloop.herokuapp.com/api/funnels', )
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormText>Create A Funnel</FormText>
            <FormGroup>
                <Label>Funnel Name</Label>
                <Input></Input>
            </FormGroup>
        </Form>
    )
}

export default AddFunnel;
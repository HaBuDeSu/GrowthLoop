import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import axios from 'axios';

const Login = props => {

    let [creds, setCreds] = useState({
        email: "",
        password: ""
    })

    const login = async () => {
        await axios.post('https://growthloop.herokuapp.com/api/users/login', creds)
    }

    return (
        <div className="container">
            <p>Login</p>
            <Form onSubmit={login}>
                <FormText>Login To Your Account</FormText>
                <FormGroup>
                    <Label>Email</Label>
                    <Input></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input></Input>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Login
import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import axios from 'axios';

const Login = props => {

    let [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [message, setMessage] = useState("")

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = async event => {
        event.preventDefault()
        await axios.post('https://growthloop.herokuapp.com/api/users/login', credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                props.history.push("/dashboard")
            })
            .catch(err => setMessage("Invalid Credentials"))
    }

    return (
        <div className="container">
            <p>Login</p>
            <Form onSubmit={login}>
                <FormText>Login To Your Account</FormText>
                <FormGroup>
                    <Label>Email</Label>
                    <Input onChange={handleChange} name="email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" onChange={handleChange} name="password"></Input>
                </FormGroup>
                <Button>Login</Button>
            </Form>
            <p>{message}</p>
        </div>
    )
}

export default Login
import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import axios from 'axios';

const Registration = props => {

    const [credentials, setCredentials] = useState({
        email: "",
        first_name: "",
        last_name: "",
        organization: "",
        password: ""
    })

    const [confirmpw, setConfirmpw] = useState({
        confirmpw: ""
    })

    const [message, setMessage] = useState("")

    const handleChange = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleConfirmpw = event => {
        setConfirmpw(event.target.value)
    }

    const register = async event => {
        event.preventDefault()
        setMessage("")
        if(credentials.password === confirmpw) {
            await axios.post('https://growthloop.herokuapp.com/api/orgs', {name: credentials.organization})
                .then(async res => {
                    await axios.post('https://growthloop.herokuapp.com/api/users/register', {
                        organization_id: res.data.orgId,
                        email: credentials.email,
                        first_name: credentials.first_name,
                        last_name: credentials.last_name,
                        password: credentials.password
                    })
                    .then(res => {
                        localStorage.setItem("token", res.data.token)
                        props.history.push("/dashboard")
                    })
                    .catch(res => console.log(res))
                    })
                .catch(err => console.log(err))
        } else {
            setMessage("Passwords Do Not Match")
        }
    }

    return (
        <div className="container">
            <p>Registration</p>
            <Form onSubmit={register}>
                <FormText>Create New Account</FormText>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input onChange={handleChange} name="first_name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input onChange={handleChange} name="last_name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Organization Name</Label>
                    <Input onChange={handleChange} name="organization"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input onChange={handleChange} name="email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" onChange={handleChange} name="password"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input type="password" onChange={handleConfirmpw}></Input>
                </FormGroup>
                <Button>Create Account</Button>
            </Form>
            <p>{message}</p>
        </div>
    )
}

export default Registration
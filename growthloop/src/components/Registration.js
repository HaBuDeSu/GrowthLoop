import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Registration = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        first_name: "",
        last_name: ""
    })

    const register = async user => {
        try {
            await axios.post('https://growthloop.biz/api/register, user')
        }
        catch {

        }
    }

    const responseGoogle = response => {
        setCredentials({
            email: response.profileObj.email,
            first_name: response.profileObj.givenName,
            last_name: response.profileObj.familyName
        })
    }

    return (
        <div className="container">
            <p>Registration</p>
            <Form onSubmit={register(credentials)}>
                <FormText>Create New Account</FormText>
                <FormGroup>
                    <Label>Organization Name</Label>
                    <Input></Input>
                </FormGroup>
                <FormGroup>
                    <Label></Label>
                    <Input></Input>
                </FormGroup>
                <FormGroup>
                    <Label></Label>
                    <Input></Input>
                </FormGroup>
                <GoogleLogin
                    clientId="752518174510-oegifrfcr3ri8ij0hit6anfrq9e5kadn.apps.googleusercontent.com"
                    buttonText="Register With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Form>
        </div>
    )
}

export default Registration
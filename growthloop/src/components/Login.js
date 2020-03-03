import React from 'react';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import GoogleLogin from 'react-google-login';

const Login = () => {

    const responseGoogle = response => {
        console.log(response)
    }

    return (
        <div className="container">
            <p>Registration</p>
            <Form>
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
                    buttonText="Login With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Form>
        </div>
    )
}

export default Login
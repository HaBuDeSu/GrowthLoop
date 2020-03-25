import React from 'react';
import logo from "../images/GrowthLoop-Logo.jpg";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const Navigation = props => {

    if(props.login) {
        return(
            <div className="navigation">
                <div className="links">

                </div>
                <div className="logo">
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className="buttons">
                    <Link to="/register"><Button>Registration</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                </div>
            </div>
        )
    } else {
        return(
            <div className="navigation">
                <div className="links">

                </div>
                <div className="logo">
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className="buttons">
                    <Link to="/register"><Button>Registration</Button></Link>
                    <Link to="/login"><Button>Login</Button></Link>
                </div>
            </div>
        )
    }
}

export default Navigation;
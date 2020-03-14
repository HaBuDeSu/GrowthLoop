import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p>Homepage</p>
            <p><Link to="/register">Registration</Link></p>
            <p><Link to="/login">Login</Link></p>
        </div>
    )
}

export default Home
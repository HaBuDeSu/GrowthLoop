import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import {Button} from 'reactstrap';

const Home = () => {
    return (
        <div className="container">
            <Navigation login={false} />
            <div className="hero">
                <p>Grow Your Business</p>
                <Link><Button>Try GrowthLoop</Button></Link>
            </div>
        </div>
    )
}

export default Home
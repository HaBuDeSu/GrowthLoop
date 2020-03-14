import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';

const Dashboard = () => {

    useEffect(() => {
        axios.get('https://growthloop.herokuapp.com/api/funnels')
            .then(res => setFunnels(res.data))
            .catch(error => console.log(error))
    })

    const [funnels, setFunnels] = useState([])

    return(
        <div className="container">
            {funnels.map(funnel => <Funnel funnel={funnel}/>)}
            <Button>Add Funnel</Button>
        </div>
    )
}

export default Dashboard;
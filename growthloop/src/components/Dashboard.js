import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Modal} from 'reactstrap';
import Funnel from './Funnel';
import AddFunnel from './AddFunnel';

const Dashboard = () => {

    useEffect(() => {
        axios.get('https://growthloop.herokuapp.com/api/funnels')
            .then(res => setFunnels(res.data))
            .catch(error => console.log(error))
    })

    const [funnels, setFunnels] = useState([])

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return(
        <div className="container">
            {funnels.map(funnel => <Funnel funnel={funnel}/>)}
            <Button onClick={toggle}>Add Funnel</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <AddFunnel />
            </Modal>
        </div>
    )
}

export default Dashboard;
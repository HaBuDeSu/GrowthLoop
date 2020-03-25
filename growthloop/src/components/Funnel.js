import React, {useState, useEffect} from 'react';
import Event from './Event';
import AddEvent from './AddEvent';
import {Button, Modal} from 'reactstrap';
import axios from 'axios';

const Funnel = props => {

    const [events, setEvents] = useState([])
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        axios.get('https://growthloop.herokuapp.com/api/funnels')
            .then(res => setEvents(res.data))
            .catch()
    })

    return(
        <div classname="Funnel">
            <h1 className="funnelName">{this.state.funnelName}</h1>
            {events.map(event => <Event event={event}/>)}
            <Button>Add Event</Button>
            <Modal isOpen={modal} toggle={toggle}><AddEvent eventId={props.match.id}/></Modal>
        </div>
    )
}

export default Funnel;
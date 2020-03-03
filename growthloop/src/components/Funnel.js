import React from 'react';
import Event from './Event'

const Funnel = () => {

    return(
        <div classname="Funnel">
            <h1 className="funnelName">{this.state.funnelName}</h1>
            {this.state.events.map(event => <Event event={event}/>)}
        </div>
    )
}

export default Funnel;
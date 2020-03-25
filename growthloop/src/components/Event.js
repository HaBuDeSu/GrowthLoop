import React from 'react';

function Event (props) {
    return (
        <div className="event">
            <p>{props.event.name}</p>
        </div>
    )
}

export default Event;
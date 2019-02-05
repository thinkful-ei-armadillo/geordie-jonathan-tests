import React from 'react';
import './Card.css';

function Card(props) {
    const badge = +props.unread
    ? <div className="unread_count badge">{props.unread}</div>
    : null;
    return (
        <div className="Card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>{badge}</p>
        </div>
    );
}

export default Card;
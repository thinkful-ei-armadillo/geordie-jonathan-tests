import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
    const badge = +props.unread
    ? <div className="unread_count badge">{props.unread}</div>
    : null;
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
                <p>{badge}</p>
            </header>
            <div className="List-cards">
                {props.cards.map((card, i) =>
                    <Card key={i}
                        title={card.title}
                        content={card.content}
                    />)}
            </div>
        </section>
    );
};

export default List;

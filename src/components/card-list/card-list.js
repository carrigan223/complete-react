import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.js'

const CardList = (props) => {
    return (
        <div className="card-list">
            {props.users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    )
}

export default CardList

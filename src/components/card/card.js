import React from 'react'
import './card.styles.css'

const Card = (props) => (
    <div className="card-container">
        <img
            class="image"
            alt="monster"
            src={`https://robohash.org/${props.user.id}?set=set2`}
        />
        <div>
        <h1>{props.user.name}</h1>
        <p>{props.user.email}</p>
        </div>
       
    </div>
)

export default Card

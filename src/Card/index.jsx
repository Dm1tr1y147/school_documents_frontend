import React from "react";

import './main.css'

const Card = (props) => (
    <a className="card" href={ '/' + props.data.image.slice(props.data.image.indexOf('media'))}>
        <h4 className="cardTitle">{props.data.title}</h4>
        <h5 className="cardTeacher">{props.data.teacher}</h5>
    </a>
);

export default Card;

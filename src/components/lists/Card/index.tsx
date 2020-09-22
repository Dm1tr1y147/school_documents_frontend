import React from 'react';
import { IData } from 'types';

import './main.css';

type props = {
    data: IData;
};

const Card: React.FC<props> = ({ data }) => (
    <a
        className="card"
        href={'/' + data.image.slice(data.image.indexOf('media'))}
    >
        <h4 className="cardTitle">{data.title}</h4>
        <h5 className="cardTeacher">{data.teacher}</h5>
    </a>
);

export default Card;

import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { emptyQuery } from '../Navbar/utils';
import { IFilterQuery } from '../../../types';
import LogoImage from './logo.png';
import './main.css';

type props = {
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>;
};

const Logotype: React.FC<props> = ({ setSearchQuery }) => {
    return (
        <Link
            to="/"
            onClick={() => {
                emptyQuery(setSearchQuery);
            }}
        >
            <img id="logo" src={LogoImage} alt="Логотип ЮФМЛ" />
        </Link>
    );
};

export default Logotype;

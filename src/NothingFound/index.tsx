import React, { useEffect, Dispatch, SetStateAction } from 'react';

import './main.css';
import icon from './icon.svg';
import { ILoadingState } from '../types';

type props = {
    setLoading?: Dispatch<SetStateAction<ILoadingState>>;
};

const NothingFound: React.FC<props> = ({ setLoading }) => {
    useEffect(() => {
        if (!setLoading) return;

        setLoading({ error: '404', fetching: false });
    }, [setLoading]);
    return (
        <div id="nothingFound">
            <img src={icon} alt="" />
            <h1>Ничего не найдено</h1>
        </div>
    );
};

export default NothingFound;

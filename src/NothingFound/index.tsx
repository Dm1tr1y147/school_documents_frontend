import React, { useEffect, Dispatch, SetStateAction } from 'react';

import './main.css';
import icon from './icon.svg';
import { ILoadingState } from '../types';

const NothingFound = ({
    setLoading
}: {
    setLoading?: Dispatch<SetStateAction<ILoadingState>>;
}) => {
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

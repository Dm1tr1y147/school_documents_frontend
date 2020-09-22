import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { IData, ILoadingState } from '../../../types';
import { fetchCardList } from '../../../utils';
import './main.css';
import removeIcon from './remove.svg';
import { removeItem } from './utils';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
};

const RemoveList: React.FC<props> = ({ setLoading, token, setToken }) => {
    const [data, setData] = useState<IData[]>([]);
    useEffect(() => fetchCardList(setData), []);

    return (
        <div id="deleteList">
            {data.map((el, index) => (
                <div key={index} className="deleteCard">
                    <h1>{el.title}</h1>
                    <h2>{el.class_num}</h2>
                    <p>{el.predmet_type}</p>
                    <p>{el.teacher}</p>
                    <button
                        onClick={async () => {
                            await removeItem(el.slug, token!);
                        }}
                    >
                        <img src={removeIcon} alt="удалить" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RemoveList;

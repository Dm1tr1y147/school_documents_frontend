import React, { useEffect, useState, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';

import { IData, ILoadingState } from '../types';
import Card from '../Card';
import './main.css';

const SubjectList = ({
    setLoading
}: {
    setLoading: Dispatch<ILoadingState>;
}) => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        setLoading({ fetching: true, error: '' });
        const fetchURL = 'https://upml-bank.dmitriy.icu/api/cards?' + new URLSearchParams({class_num: '11'}).toString()
        fetch(fetchURL)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading({ fetching: false, error: '' });
            })
            .catch((err) => {
                console.error(err);
                setLoading({ fetching: false, error: err });
            });
    }, [setLoading]);

    return (
        <main className="subjectList">
            {data.map((el, index) => (
                <Card key={index} data={el} />
            ))}
        </main>
    );
};

export default SubjectList;

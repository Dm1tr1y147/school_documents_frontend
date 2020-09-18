import React, { useEffect, useState, Dispatch } from 'react';
import { useHistory } from 'react-router-dom';

import { IData, ILoadingState, IFilterQuery } from '../types';
import { queryIsEmpty } from '../Navbar/utils';
import Card from '../Card';
import './main.css';

const SubjectList = ({
    setLoading,
    searchQuery
}: {
    setLoading: Dispatch<ILoadingState>;
    searchQuery: IFilterQuery;
}) => {
    const [data, setData] = useState<IData[]>([]);

    const history = useHistory();

    useEffect(() => {
        if (queryIsEmpty(searchQuery)) {
            history.push('/');
            return;
        }

        setLoading({ fetching: true, error: '' });
        const fetchURL =
            'https://upml-bank.dmitriy.icu/api/cards?' +
            new URLSearchParams({ ...searchQuery }).toString();
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
    }, [setLoading, searchQuery]);

    return (
        <main className="subjectList">
            {data.map((el, index) => (
                <Card key={index} data={el} />
            ))}
        </main>
    );
};

export default SubjectList;

import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

import { IData, ILoadingState, IFilterQuery } from '../../types';
import { queryIsEmpty } from '../../components/navigation/Navbar/utils';
import Card from '../../components/lists/Card';
import './main.css';
import NothingFound from '../NothingFound';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    searchQuery: IFilterQuery;
};

const SubjectList: React.FC<props> = ({ setLoading, searchQuery }) => {
    const [data, setData] = useState<IData[]>([]);

    const { push: historyPush } = useHistory();

    useEffect(() => {
        if (queryIsEmpty(searchQuery)) {
            historyPush('/');
            return;
        }

        setLoading({ fetching: true, error: '' });
        const fetchURL =
            'https://upml-bank.dmitriy.icu/api/cards?' +
            new URLSearchParams({ ...searchQuery }).toString();
        fetch(fetchURL)
            .then((res) => {
                if (!res.ok) throw res.statusText;
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading({ fetching: false, error: '' });
            })
            .catch((err) => {
                setLoading({ fetching: false, error: err });
                console.log(err);
            });
    }, [setLoading, searchQuery, historyPush]);

    return (
        <main className="subjectList">
            {data.length ? (
                data.map((el, index) => <Card key={index} data={el} />)
            ) : (
                <NothingFound />
            )}
        </main>
    );
};

export default SubjectList;

import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import { queryIsEmpty } from './Navbar/utils';
import SubjectList from './SubjectList';
import { ILoadingState, IFilterQuery } from './types';
import NothingFound from './NothingFound';

const useDidUpdate: typeof useEffect = (func, dependencies) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            func();
        } else {
            didMountRef.current = true;
        }

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

const App = () => {
    const history = useHistory();

    const [loading, setLoading] = useState<ILoadingState>({
        fetching: true,
        error: ''
    });

    const [searchQuery, setSearchQuery] = useState<IFilterQuery>({
        search: '',
        class_num: '',
        type_num: '',
        predmet_type: '',
        teacher: ''
    });

    useDidUpdate(() => {
        if (queryIsEmpty(searchQuery)) return;

        history.push('/list');
    }, [searchQuery]);

    return (
        <>
            <Header query={searchQuery} loading={loading} setSearchQuery={setSearchQuery} />
            <Navbar query={searchQuery} setSearchQuery={setSearchQuery} />
            <Switch>
                <Route exact path="/">
                    <Home
                        setLoading={setLoading}
                        setSearchQuery={setSearchQuery}
                    />
                </Route>
                <Route path="/list">
                    <SubjectList
                        searchQuery={searchQuery}
                        setLoading={setLoading}
                    />
                </Route>
                <Route path="*">
                    <NothingFound setLoading={setLoading} />
                </Route>
            </Switch>
        </>
    );
};

export default App;

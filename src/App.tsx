import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from './components/navigation/Header';
import Home from './views/Home';
import Navbar from './components/navigation/Navbar';
import { queryIsEmpty } from './components/navigation/Navbar/utils';
import SubjectList from './views/SubjectList';
import { ILoadingState, IFilterQuery } from './types';
import NothingFound from './views/NothingFound';
import Admin from './views/Admin';
import { useDidUpdate } from './utils';

const App = () => {
    const history = useHistory();

    const [token, setToken] = useState<string | null>(
        localStorage.getItem('token')
    );

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
            <Header
                query={searchQuery}
                loading={loading}
                setSearchQuery={setSearchQuery}
            />
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
                <Route path="/a">
                    <Admin
                        token={token}
                        setToken={setToken}
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

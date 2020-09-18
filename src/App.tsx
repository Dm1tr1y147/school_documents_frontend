import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { queryIsEmpty } from './Navbar/utils';
import SubjectList from './SubjectList';
import { ILoadingState, IFilterQuery } from './types';

const genName = (searchQuery: IFilterQuery, path: string): string => {
    if (path === '/list' && searchQuery) {
        let result = '';

        if (searchQuery.class_num) {
            result = result + searchQuery.class_num + ' класс';
        }

        if (searchQuery.predmet_type) {
            result = result + ' ' + searchQuery.predmet_type;
        }

        if (searchQuery.teacher) {
            result = result + ' ' + searchQuery.teacher;
        }

        if (searchQuery.search) {
            result = result + ' поиск по "' + searchQuery.search + '"';
        }

        return result;
    }

    if (path === '/') {
        return 'Банк семинаров';
    }

    return '';
};

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
        <div>
            <header id="name">
                <h1>{genName(searchQuery, history.location.pathname)}</h1>
            </header>
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
                    <h1>404</h1>
                </Route>
            </Switch>
        </div>
    );
};

export default App;

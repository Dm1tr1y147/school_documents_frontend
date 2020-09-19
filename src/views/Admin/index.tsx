import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { ILoadingState } from '../../types';
import LogInForm from './LogInForm';
import UploadForm from './UploadForm';
import './main.css';

type props = {
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
};

const Admin: React.FC<props> = ({ token, setToken, setLoading }) => {
    const { path, url } = useRouteMatch();

    useEffect(() => {
        setLoading({ fetching: false, error: '' });
    }, [setLoading]);

    return (
        <div id="admin">
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/u`}>Добавить</Link>
                    </li>
                    <li>
                        <Link to={`${url}/r`}>Удалить</Link>
                    </li>
                </ul>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        setToken(null);
                    }}
                    id="logSwitch"
                >
                    <Link to={`${url}/l`}>Выход</Link>
                </button>
            </nav>
            <Switch>
                <Route path={`${path}/u`}>
                    <UploadForm
                        setLoading={setLoading}
                        token={token}
                        setToken={setToken}
                    />
                </Route>
                <Route path={`${path}/l`}>
                    <LogInForm
                        setLoading={setLoading}
                        token={token}
                        setToken={setToken}
                    />
                </Route>
                <Route path={`${path}/`}>
                    <Redirect to={`${path}/l`} />
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;

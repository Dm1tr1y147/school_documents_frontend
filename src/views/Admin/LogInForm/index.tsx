import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ILoadingState } from 'types';
import { handleFormSubmit } from 'views/Admin/utils';
import { IErrorStatus } from 'views/Admin/types';
import { handleError } from 'views/Admin/handlers';
import { handleSuccessfulLogin } from './handlers';
import './main.css';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
};

const LogInForm: React.FC<props> = ({ setLoading, token, setToken }) => {
    const { push: historyPush } = useHistory();

    const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
        successful: true
    });

    useEffect(() => {
        setLoading({ fetching: false, error: '' });
        if (token) {
            historyPush('/a/u');
        }
    }, [setLoading, historyPush, token]);

    return (
        <form
            id="logIn"
            onSubmit={(e) => {
                setErrorStatus({ successful: true });
                return handleFormSubmit(
                    e,
                    'api/login',
                    (err) => handleError(err, setErrorStatus),
                    (res: Response) => handleSuccessfulLogin(res, setToken)
                );
            }}
        >
            <label htmlFor="">Имя пользователя</label>
            <input type="text" name="username" />

            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" />

            {!errorStatus.successful ? <p className="errorText">{errorStatus.errorMessage}</p> : ''}

            <input type="submit" value="Вход" />
        </form>
    );
};

export default LogInForm;

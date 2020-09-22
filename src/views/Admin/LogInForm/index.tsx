import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ILoadingState } from '../../../types';
import { handleFormSubmit } from '../utils';
import { IErrorStatus } from '../types';
import { handleLoginError } from '../UploadForm/handlers';
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
            onSubmit={(e) =>
                handleFormSubmit(
                    e,
                    'api/login',
                    (err) => handleLoginError(err, setErrorStatus),
                    (res: Response) => handleSuccessfulLogin(res, setToken),
                    { 'Access-Control-Allow-Origin': '*' }
                )
            }
        >
            <label htmlFor="">Имя пользователя</label>
            <input type="text" name="username" />

            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" />

            <input type="submit" value="Вход" />
            {!errorStatus.successful ? <p>{errorStatus.errorMessage}</p> : ''}
        </form>
    );
};

export default LogInForm;

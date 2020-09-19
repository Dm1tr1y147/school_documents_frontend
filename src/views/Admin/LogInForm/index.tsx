import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ILoadingState } from '../../../types';
import { handleFormSubmit } from '../../../utils';
import { handleSuccessfulLogin } from './handlers';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
};

const LogInForm: React.FC<props> = ({ setLoading, token, setToken }) => {
    const { push: historyPush } = useHistory();

    useEffect(() => {
        setLoading({ fetching: false, error: '' });
        if (token) {
            historyPush('/u');
        }
    }, [setLoading, historyPush, token]);

    return (
        <form
            onSubmit={(e) =>
                handleFormSubmit(e, 'api/login', (res: Response) => handleSuccessfulLogin(res, setToken))
            }
        >
            <label htmlFor="">Имя пользователя</label>
            <input type="text" name="username" />

            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" />

            <input type="submit" value="Вход" />
        </form>
    );
};

export default LogInForm;

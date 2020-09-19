import { Dispatch, SetStateAction } from 'react';

const handleSuccessfulLogin = (
    res: Response,
    setToken: Dispatch<SetStateAction<string | null>>
) => {
    res.json().then(({ token }) => {
        localStorage.setItem('token', token);
        setToken(token);
    });
};

export { handleSuccessfulLogin };

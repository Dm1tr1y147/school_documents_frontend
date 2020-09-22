import { Dispatch, SetStateAction } from 'react';
import { IErrorStatus } from './types';

const handleLoginError = (
    err: ErrorEvent,
    setErrorStatus: Dispatch<SetStateAction<IErrorStatus>>
) => {
    console.log(err);
    setErrorStatus({
        successful: false,
        errorMessage: err.toString()
    });
};

export { handleLoginError };

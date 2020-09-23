import { Dispatch, SetStateAction } from 'react';
import { IErrorStatus } from './types';

const handleError = (
    err: string,
    setErrorStatus: Dispatch<SetStateAction<IErrorStatus>>
) => {
    console.log(err);
    setErrorStatus({
        successful: false,
        errorMessage: 'Ошибка'
    });
};

export { handleError };

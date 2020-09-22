import { Dispatch, SetStateAction } from 'react';
import { IFilterQuery } from 'types';

const queryIsEmpty = (q: IFilterQuery): boolean => {
    for (const value of Object.values(q)) {
        if (value) {
            return false;
        }
    }

    return true;
};

const emptyQuery = (setter: Dispatch<SetStateAction<IFilterQuery>>) => {
    setter({
        class_num: '',
        type_num: '',
        predmet_type: '',
        search: '',
        teacher: ''
    });
};

export { queryIsEmpty, emptyQuery };

import { Dispatch, SetStateAction } from 'react';
import { IFilterQuery } from '../types';

const handleShowMore = (
    predmet_type: string,
    class_num: number,
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>
) => {
    setSearchQuery(
        (prev): IFilterQuery => {
            return {
                ...prev,
                predmet_type,
                class_num: class_num.toString()
            };
        }
    );
};

export { handleShowMore };

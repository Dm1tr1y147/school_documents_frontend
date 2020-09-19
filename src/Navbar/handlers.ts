import { Dispatch, RefObject, SetStateAction } from 'react';
import { IFilterQuery } from '../types';

const handleFiltersButton = (
    filtersCollapsed: boolean,
    localFilters: Partial<IFilterQuery>,
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>,
    setFiltersCollapsed: Dispatch<SetStateAction<boolean>>
) => {
    if (!filtersCollapsed) {
        setSearchQuery((prev) => {
            return { ...prev, ...localFilters };
        });
    }
    setFiltersCollapsed((prev) => !prev);
};

const handleSelectChange = (
    element: HTMLSelectElement,
    setLocalFilters: Dispatch<SetStateAction<Partial<IFilterQuery>>>
) => {
    setLocalFilters((prev) => {
        return { ...prev, [element.name]: element.value };
    });
};

const handleSearchButton = (
    searchCollapsed: boolean,
    setSearchCollapsed: Dispatch<SetStateAction<boolean>>,
    setInputFocus: () => void,
    searchInputRef: RefObject<HTMLInputElement>,
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>
) => {
    if (searchCollapsed) {
        setSearchCollapsed(false);
        setInputFocus();
    } else if (searchInputRef && searchInputRef.current) {
        const value = searchInputRef.current.value;

        setSearchQuery((prev) => {
            return { ...prev, search: value };
        });
        setSearchCollapsed(true);

        searchInputRef.current.value = '';
    }
};

export { handleFiltersButton, handleSelectChange, handleSearchButton };

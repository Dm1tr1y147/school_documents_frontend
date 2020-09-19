import { IFilterQuery } from '../../../types';

const genName = (
    searchQuery: IFilterQuery,
    path: string,
    error: string
): string => {
    if (error) {
        return error.toString();
    }

    if (path === '/a/u') {
        return 'Upload form';
    }

    if (path === '/a/l') {
        return 'login';
    }

    if (path === '/list' && searchQuery) {
        let result = '';

        if (searchQuery.class_num) {
            result = result + searchQuery.class_num + ' класс';
        }

        if (searchQuery.predmet_type) {
            result = result + ' ' + searchQuery.predmet_type;
        }

        if (searchQuery.teacher) {
            result = result + ' ' + searchQuery.teacher;
        }

        if (searchQuery.search) {
            result = result + ' поиск по "' + searchQuery.search + '"';
        }

        return result;
    }

    if (path === '/') {
        return 'Банк семинаров';
    }

    return '';
};

export { genName };

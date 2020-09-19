import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Select from '../../../components/uploadForm/Select';
import { ILoadingState } from '../../../types';
import { handleFormSubmit } from '../../../utils';
import selectOptions from './selectOptions.json';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
};

const UploadForm: React.FC<props> = ({ setLoading, token, setToken }) => {
    const { push: historyPush } = useHistory();

    useEffect(() => {
        setLoading({ fetching: false, error: '' });
        if (!token) {
            historyPush('/l');
        }
    }, [setLoading, historyPush, token]);

    return (
        <>
            <form
                onSubmit={(e) =>
                    handleFormSubmit(e, 'api/card/create', undefined, {
                        Authorization: `Token ${localStorage.token}`
                    })
                }
            >
                <label htmlFor="title">Название</label>
                <input type="text" name="title" />

                <Select
                    label="Преподаватель"
                    name="teacher"
                    options={selectOptions.teacher}
                />

                <Select
                    label="Тип задания"
                    name="type_num"
                    options={selectOptions.type_num}
                />

                <Select
                    label="Класс"
                    name="class_num"
                    options={selectOptions.class_num}
                />

                <Select
                    label="Предмет"
                    name="predmet_type"
                    options={selectOptions.predmet_type}
                />

                <label htmlFor="image">Файл</label>
                <input type="file" name="image" id="image" />

                <input type="submit" value="Отправить" />
            </form>
            <button
                onClick={() => {
                    localStorage.removeItem('token');
                    setToken(null);
                }}
            >
                Выход
            </button>
        </>
    );
};

export default UploadForm;

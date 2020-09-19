import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Select from '../../../components/uploadForm/Select';
import { ILoadingState } from '../../../types';
import { handleFormSubmit } from '../../../utils';
import selectOptions from './selectOptions.json';
import './main.css';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    token: string | null;
    setToken: Dispatch<SetStateAction<string | null>>;
};

const UploadForm: React.FC<props> = ({ setLoading, token, setToken }) => {
    const { push: historyPush } = useHistory();

    useEffect(() => {
        if (!token) {
            historyPush('/a/l');
        }
    }, [setLoading, historyPush, token]);

    return (
        <form
            id="uploadForm"
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
            <aside>
                <input type="file" name="image" id="image" />
            </aside>

            <input type="submit" value="Отправить" />
        </form>
    );
};

export default UploadForm;

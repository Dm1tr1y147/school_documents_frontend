import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Select from 'components/Form/Select';
import { ILoadingState } from 'types';
import { handleFormSubmit } from 'views/Admin/utils';
import selectOptions from './selectOptions.json';
import './main.css';
import { IErrorStatus } from '../types';
import { handleError } from '../handlers';

type props = {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    token: string | null;
};

const UploadForm: React.FC<props> = ({ setLoading, token }) => {
    const { push: historyPush } = useHistory();

    const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
        successful: true
    });

    useEffect(() => {
        if (!token) {
            historyPush('/a/l');
        }
    }, [setLoading, historyPush, token]);

    return (
        <form
            id="uploadForm"
            onSubmit={(e) => {
                setErrorStatus({ successful: true });
                handleFormSubmit(
                    e,
                    'api/card/create',
                    (err) => handleError(err, setErrorStatus),
                    undefined,
                    {
                        Authorization: `Token ${token}`
                    }
                );
            }}
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

            {!errorStatus.successful ? (
                <p className="errorText">{errorStatus.errorMessage}</p>
            ) : (
                ''
            )}

            <input type="submit" value="Отправить" />
        </form>
    );
};

export default UploadForm;

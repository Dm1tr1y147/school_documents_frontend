import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { IData, ILoadingState } from './types';

const useFocus = (focusRef: React.RefObject<HTMLInputElement>) => {
    const setFocus = () => {
        setTimeout(() => {
            focusRef.current && focusRef.current.focus();
        }, 500);
    };

    return setFocus;
};

const useDidUpdate: typeof useEffect = (func, dependencies) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            func();
        } else {
            didMountRef.current = true;
        }

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

const fetchCardList = (
    setData: Dispatch<SetStateAction<IData[]>>,
    setLoading?: Dispatch<SetStateAction<ILoadingState>>
) => {
    if (setLoading) setLoading({ fetching: true, error: '' });

    const requestURL = 'https://upml-bank.dmitriy.icu/api/cards';

    fetch(requestURL)
        .then((res) => {
            if (!res.ok) throw res.statusText;
            return res.json();
        })
        .then((data) => {
            setData(data);
            if (setLoading) setLoading({ fetching: false, error: '' });
        })
        .catch((err) => {
            if (setLoading) setLoading({ fetching: false, error: err });
            console.error(err);
        });
};

export { useFocus, useDidUpdate, fetchCardList };

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card';
import NothingFound from '../NothingFound';
import { IData, IFilterQuery, ILoadingState } from '../types';
import './main.css';

const Home = ({
    setLoading,
    setSearchQuery
}: {
    setLoading: Dispatch<SetStateAction<ILoadingState>>;
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>;
}) => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        setLoading({ fetching: true, error: '' });

        const requestURL = 'https://upml-bank.dmitriy.icu/api/cards';
        fetch(requestURL)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading({ fetching: false, error: '' });
            })
            .catch((err) => {
                setLoading({ fetching: false, error: err });
                console.error(err);
            });
    }, [setLoading]);

    const classes: number[] = [
        ...Array.from(new Set(data.map((el) => parseInt(el.class_num)).sort()))
    ];
    const subjects: string[] = [
        ...Array.from(new Set(data.map((el) => el.predmet_type).sort()))
    ];

    const handleShowMore = (predmet_type: string, class_num: number) => {
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

    return (
        <main className="homeContainer">
            {classes.length ? (
                classes.map((class_num, index) => (
                    <div key={index} className="classContainer">
                        <h1>{class_num} класс</h1>
                        {subjects.map((subject, jndex) =>
                            data.filter(
                                (el) =>
                                    parseInt(el.class_num) === class_num &&
                                    el.predmet_type === subject
                            ).length ? (
                                <div key={jndex} className="subjectContainer">
                                    <h2>{subject}</h2>
                                    <div className="carousel">
                                        <div className="carouselInner">
                                            {data
                                                .filter(
                                                    (el) =>
                                                        parseInt(
                                                            el.class_num
                                                        ) === class_num &&
                                                        el.predmet_type ===
                                                            subject
                                                )
                                                .map((el, kndex) => (
                                                    <Card
                                                        key={kndex}
                                                        data={el}
                                                    />
                                                ))}
                                        </div>
                                        <div className="showMore">
                                            <Link
                                                onClick={() =>
                                                    handleShowMore(
                                                        subject,
                                                        class_num
                                                    )
                                                }
                                                to={'/list'}
                                            >
                                                Больше &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )
                        )}

                        <div className="curve"></div>
                    </div>
                ))
            ) : (
                <NothingFound />
            )}
        </main>
    );
};

export default Home;

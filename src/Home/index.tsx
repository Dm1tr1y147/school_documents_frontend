import React, { Dispatch, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../Card";
import { IData, ILoadingState } from "../types";
import "./main.css";

const Home = ({ setLoading }: {setLoading: Dispatch<ILoadingState>}) => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        setLoading({ fetching: true, error: "" });
        console.log("Loading data");

        const requestURL =
            "https://cors-anywhere.herokuapp.com/upml-bank.dmitriy.icu/api/cards";
        fetch(requestURL)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data");
                console.log(data);

                setData(data);
                setLoading({ fetching: false, error: "" });
            })
            .catch((err) => {
                setLoading({ fetching: false, error: err });
                console.error(err);
            });
    }, [setLoading]);

    const classes: number[] = [
        ...Array.from(new Set(data.map((el) => parseInt(el.class_num)).sort())),
    ];
    const subjects: string[] = [...Array.from(new Set(data.map((el) => el.predmet_type).sort()))];

    return (
        <main className="homeContainer">
            {classes.map((class_num, index) => (
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
                                                    parseInt(el.class_num) ===
                                                        class_num &&
                                                    el.predmet_type === subject
                                            )
                                            .map((el, kndex) => (
                                                <Card key={kndex} data={el} />
                                            ))}
                                    </div>
                                    <div className="showMore">
                                        <Link
                                            to={
                                                "/list?subject=" +
                                                subject +
                                                "?clas=" +
                                                class_num
                                            }
                                        >
                                            Больше &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}

                    <div className="curve"></div>
                </div>
            ))}
        </main>
    );
};

export default Home;

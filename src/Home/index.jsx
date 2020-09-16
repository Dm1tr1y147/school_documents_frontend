import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import "./main.css";

const data = [
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "1",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 3,
    },
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "1",
        post_date: "2020-09-15",
        predmet_type: "Физика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 3,
    },
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "1",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 1,
    },
    {
        title: "Very long text, too long to show it full",
        type_num: "Семинары",
        class_num: "2",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 2,
    },
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "2",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 3,
    },
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "3",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 1,
    },
    {
        title: "Very long text, too long to show it full",
        type_num: "Семинары",
        class_num: "3",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 2,
    },
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "11",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 3,
    },
    {
        title: "Семинар 10",
        type_num: "Семинары",
        class_num: "10",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 1,
    },
    {
        title: "Very long text, too long to show it full",
        type_num: "Семинары",
        class_num: "11",
        post_date: "2020-09-15",
        predmet_type: "Математика",
        teacher: "Ню В.В",
        image:
            "/code/media/card_img/bxd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd0xb0xd1x80_10_xd0xa1xd0xb5xd0xbcxd0xb8xd0xbdxd_lN2D1k2.jpg",
        slug: "card-3-11-2020-09-15",
        card_id: 2,
    },
];

const Home = () => {
    const classes = [
        ...new Set(data.map((el) => parseInt(el.class_num)).sort()),
    ];
    const subjects = [...new Set(data.map((el) => el.predmet_type).sort())];

    return (
        <main>
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

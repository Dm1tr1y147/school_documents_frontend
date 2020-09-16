import React from "react";
import { useLocation } from "react-router-dom";
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
];

const SubjectList = () => {
    const location = useLocation();

    return (
        <main className="subjectList">
            {data.map((el, index) => (
                <Card key={index} data={el} />
            ))}
        </main>
    );
};

export default SubjectList;

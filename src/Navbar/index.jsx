import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./main.css";

import LogoImage from "./logo.png";
import FilterIcon from "./filter.svg";
import SearchIcon from "./search.svg";

const Navbar = (props) => {
    const [searchCollapsed, setSearchCollapsed] = useState(true);
    const [filtersCollapsed, setFiltersCollapsed] = useState(true);

    const searchVariants = {
        open: {
            width: "calc(100vw - 4vh)",
            display: "block",
        },
        closed: {
            width: "6vh",
            transitionEnd: {
                display: "none",
            },
        },
    };

    const navVariants = {
        open: {
            height: "100vh",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        },
        closed: {
            height: "10vh",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
        },
    };

    const filtersVariants = {
        open: {
            height: "100vh",
            padding: "2vh",
        },
        closed: {
            height: 0,
            padding: 0,
        },
    };

    const transition = {
        ease: "easeIn",
        duration: 0.5,
    };

    return (
        <motion.header
            id="navbar"
            variants={navVariants}
            transition={transition}
            animate={filtersCollapsed ? "closed" : "open"}
        >
            <nav>
                <Link to="/">
                    <img id="logo" src={LogoImage} alt="Логотип ЮФМЛ" />
                </Link>

                <div id="spacing"></div>

                <button
                    className="navButton"
                    id="filter"
                    onClick={() => setFiltersCollapsed((prev) => !prev)}
                >
                    <img src={FilterIcon} alt="Фильтр" />
                </button>

                <button
                    className="navButton"
                    id="search"
                    onClick={() => setSearchCollapsed((prev) => !prev)}
                >
                    <img src={SearchIcon} alt="Поиск" />
                </button>
                <motion.input
                    type="search"
                    animate={searchCollapsed ? "closed" : "open"}
                    variants={searchVariants}
                    transition={transition}
                    aria-label="Поиск"
                    name="search"
                    id="searchInput"
                />
            </nav>

            <motion.form
                variants={filtersVariants}
                transition={transition}
                animate={filtersCollapsed ? "closed" : "open"}
                id="filters"
            >
                <div>
                    <label htmlFor="teacherFilter">
                        <h2>Преподаватель</h2>
                    </label>
                    <select name="teacher" id="teacherFilter">
                        <option defaultValue value="">
                            -
                        </option>
                        <option value="Попов Д.А">Попов Д.А</option>
                        <option value="Ильин А.Б">Ильин А.Б</option>
                        <option value="Пачин И.М">Пачин И.М</option>
                        <option value="Николаева Л.Н">Николаева Л.Н</option>
                        <option value="Ню В.В">Ню В.В</option>
                        <option value="Вишневская Е.А">Вишневская Е.А</option>
                        <option value="Некрасов М.В">Некрасов М.В</option>
                        <option value="Попова Н.А">Попова Н.А</option>
                        <option value="Пачин М.Ф">Пачин М.Ф</option>
                        <option value="Керамов Н.Д">Керамов Н.Д</option>
                        <option value="Новожилова В.И">Новожилова В.И</option>
                        <option value="Шпехт А.Ю">Шпехт А.Ю</option>
                        <option value="Конкина Н.В">Конкина Н.В</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="typeFilter">
                        <h2>Тип задания</h2>
                    </label>
                    <select name="type_num" id="typeFilter">
                        <option defaultValue value="">
                            -
                        </option>
                        <option value="Семестровки">Семестровки</option>
                        <option value="Семинары">Семинары</option>
                        <option value="Потоковые">Потоковые</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="predmetFilter">
                        <h2>Предмет</h2>
                    </label>
                    <select name="predmet_type" id="predmetFilter">
                        <option defaultValue value="">
                            -
                        </option>
                        <option value="Математика">Математика</option>
                        <option value="Физика">Физика</option>
                        <option value="Информатика">Информатика</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="classFilter">
                        <h2>Класс</h2>
                    </label>
                    <select name="class_num" id="classFilter">
                        <option defaultValue value="">
                            -
                        </option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
            </motion.form>
        </motion.header>
    );
};

export default Navbar;

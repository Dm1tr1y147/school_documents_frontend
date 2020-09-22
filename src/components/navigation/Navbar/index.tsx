import React, {
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState
} from 'react';
import { motion } from 'framer-motion';

import './main.css';
import FilterIcon from './filter.svg';
import SearchIcon from './search.svg';
import { IFilterQuery } from '../../../types';
import { useFocus } from '../../../utils';
import Logotype from '../Logotype';
import {
    filtersVariants,
    navVariants,
    searchVariants,
    transition
} from './animations';
import {
    handleFiltersButton,
    handleSearchButton,
    handleSelectChange
} from './handlers';

type props = {
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>;
    query: IFilterQuery;
};

const Navbar: React.FC<props> = ({ setSearchQuery, query }) => {
    const [searchCollapsed, setSearchCollapsed] = useState(true);
    const [filtersCollapsed, setFiltersCollapsed] = useState(true);
    const [localFilters, setLocalFilters] = useState<Partial<IFilterQuery>>({});

    const searchInputRef = useRef<HTMLInputElement>(null);

    const setInputFocus = useFocus(searchInputRef);

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (formRef.current) {
            for (const [key, value] of Object.entries(query)) {
                if (formRef.current.elements.namedItem(key)) {
                    (formRef.current.elements.namedItem(
                        key
                    ) as HTMLSelectElement).value = value;
                }
            }
        }
    }, [query]);

    return (
        <motion.header
            id="navbar"
            variants={navVariants}
            transition={transition}
            animate={filtersCollapsed ? 'closed' : 'open'}
        >
            <nav>
                <Logotype setSearchQuery={setSearchQuery} />

                <div id="spacing"></div>

                <button
                    className="navButton"
                    id="filter"
                    onClick={() =>
                        handleFiltersButton(
                            filtersCollapsed,
                            localFilters,
                            setSearchQuery,
                            setFiltersCollapsed
                        )
                    }
                >
                    <img src={FilterIcon} alt="Фильтр" />
                </button>

                <button
                    className="navButton"
                    id="search"
                    onClick={() =>
                        handleSearchButton(
                            searchCollapsed,
                            setSearchCollapsed,
                            setInputFocus,
                            searchInputRef,
                            setSearchQuery
                        )
                    }
                >
                    <img src={SearchIcon} alt="Поиск" />
                </button>
                <motion.input
                    animate={searchCollapsed ? 'closed' : 'open'}
                    variants={searchVariants}
                    transition={transition}
                    aria-label="Поиск"
                    ref={searchInputRef}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchButton(
                                searchCollapsed,
                                setSearchCollapsed,
                                setInputFocus,
                                searchInputRef,
                                setSearchQuery
                            );
                        }
                    }}
                    type="search"
                    name="search"
                    id="searchInput"
                />
            </nav>

            <motion.form
                variants={filtersVariants}
                transition={transition}
                animate={filtersCollapsed ? 'closed' : 'open'}
                id="filters"
                ref={formRef}
            >
                <div className='centerContent'>
                    <label htmlFor="teacherFilter">
                        <h2>Преподаватель</h2>
                    </label>
                    <select
                        name="teacher"
                        onChange={(e) =>
                            handleSelectChange(e.target, setLocalFilters)
                        }
                        id="teacherFilter"
                    >
                        <option value="">-</option>
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
                <div className='centerContent'>
                    <label htmlFor="typeFilter">
                        <h2>Тип задания</h2>
                    </label>
                    <select
                        name="type_num"
                        onChange={(e) =>
                            handleSelectChange(e.target, setLocalFilters)
                        }
                        id="typeFilter"
                    >
                        <option value="">-</option>
                        <option value="Семестровки">Семестровки</option>
                        <option value="Семинары">Семинары</option>
                        <option value="Потоковые">Потоковые</option>
                    </select>
                </div>
                <div className='centerContent'>
                    <label htmlFor="predmetFilter">
                        <h2>Предмет</h2>
                    </label>
                    <select
                        name="predmet_type"
                        onChange={(e) =>
                            handleSelectChange(e.target, setLocalFilters)
                        }
                        id="predmetFilter"
                    >
                        <option value="">-</option>
                        <option value="Математика">Математика</option>
                        <option value="Физика">Физика</option>
                        <option value="Информатика">Информатика</option>
                    </select>
                </div>
                <div className='centerContent'>
                    <label htmlFor="classFilter">
                        <h2>Класс</h2>
                    </label>
                    <select
                        name="class_num"
                        onChange={(e) =>
                            handleSelectChange(e.target, setLocalFilters)
                        }
                        id="classFilter"
                    >
                        <option value="">-</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                </div>
            </motion.form>
        </motion.header>
    );
};

export default Navbar;

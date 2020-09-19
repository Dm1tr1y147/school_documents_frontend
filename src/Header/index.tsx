import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { motion, Transition } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import { IFilterQuery, ILoadingState } from '../types';
import './main.css';
import Logotype from '../Logotype';

const genName = (
    searchQuery: IFilterQuery,
    path: string,
    error: string
): string => {
    if (error) {
        return error.toString();
    }
    if (path === '/list' && searchQuery) {
        let result = '';

        if (searchQuery.class_num) {
            result = result + searchQuery.class_num + ' класс';
        }

        if (searchQuery.predmet_type) {
            result = result + ' ' + searchQuery.predmet_type;
        }

        if (searchQuery.teacher) {
            result = result + ' ' + searchQuery.teacher;
        }

        if (searchQuery.search) {
            result = result + ' поиск по "' + searchQuery.search + '"';
        }

        return result;
    }

    if (path === '/') {
        return 'Банк семинаров';
    }

    return '';
};

const Header = ({
    query,
    loading,
    setSearchQuery
}: {
    query: IFilterQuery;
    loading: ILoadingState;
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>;
}) => {
    /*
     * Hooks definitions
     */
    const history = useHistory();

    useEffect(() => {}, [loading]);

    /*
     * Animations
     */
    const headerVariants = {
        expanded: {
            height: '100vh'
        },
        collapsed: {
            height: '10vh'
        }
    };

    const transition: Transition = {
        duration: 0.5,
        ease: 'linear'
    };

    return (
        <motion.header
            id="name"
            variants={headerVariants}
            transition={transition}
            animate={loading.fetching ? 'expanded' : 'collapsed'}
            initial="expanded"
        >
            <h1>{genName(query, history.location.pathname, loading.error)}</h1>
            {loading.fetching ? (
                <motion.div
                    id="loadingLogo"
                    animate={{ rotate: 360 }}
                    transition={{ loop: Infinity, ease: 'linear', duration: 3 }}
                >
                    <Logotype setSearchQuery={setSearchQuery} />
                </motion.div>
            ) : (
                ''
            )}
        </motion.header>
    );
};

export default Header;

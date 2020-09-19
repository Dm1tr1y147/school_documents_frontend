import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { IFilterQuery, ILoadingState } from '../../../types';
import './main.css';
import Logotype from '../Logotype';
import { genName } from './utils';
import {
    headerTransition,
    headerVariants,
    loadingLogoTransition
} from './animations';

type props = {
    query: IFilterQuery;
    loading: ILoadingState;
    setSearchQuery: Dispatch<SetStateAction<IFilterQuery>>;
};

const Header: React.FC<props> = ({ query, loading, setSearchQuery }) => {
    /*
     * Hooks definitions
     */
    const { pathname } = useLocation();

    return (
        <motion.header
            id="name"
            variants={headerVariants}
            transition={headerTransition}
            animate={loading.fetching ? 'expanded' : 'collapsed'}
            initial="expanded"
        >
            <h1>{genName(query, pathname, loading.error)}</h1>
            {loading.fetching ? (
                <motion.div
                    id="loadingLogo"
                    animate={{ rotate: 360 }}
                    transition={loadingLogoTransition}
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

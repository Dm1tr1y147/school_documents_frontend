import { Transition, Variants } from 'framer-motion'

const searchVariants: Variants = {
    open: {
        width: 'calc(100vw - 4vh)',
        display: 'block'
    },
    closed: {
        width: '6vh',
        transitionEnd: {
            display: 'none'
        }
    }
};

const navVariants: Variants = {
    open: {
        height: '100vh',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    closed: {
        height: '10vh',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
    }
};

const filtersVariants: Variants = {
    open: {
        height: '100vh',
        padding: '2vh'
    },
    closed: {
        height: 0,
        padding: 0
    }
};

const transition: Transition = {
    ease: 'easeIn',
    duration: 0.5
};

export { filtersVariants, navVariants, searchVariants, transition };

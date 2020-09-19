import { Transition, Variants } from 'framer-motion';

const headerVariants: Variants = {
    expanded: {
        height: '100vh'
    },
    collapsed: {
        height: '10vh'
    }
};

const headerTransition: Transition = {
    duration: 0.5,
    ease: 'linear'
};

const loadingLogoTransition: Transition = {
    loop: Infinity,
    ease: 'linear',
    duration: 3
};

export { headerVariants, headerTransition, loadingLogoTransition };

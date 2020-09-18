const useFocus = (focusRef: React.RefObject<HTMLInputElement>) => {
    const setFocus = () => {
        setTimeout(() => {
            focusRef.current && focusRef.current.focus();
        }, 500);
    };

    return setFocus;
};

export { useFocus };

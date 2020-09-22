import React from 'react';

type props = {
    label: string;
    name: string;
    options: string[];
};

const Select: React.FC<props> = ({ label, name, options }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                <option defaultValue={undefined} value="">
                    -
                </option>
                {options.map((val, index) => (
                    <option key={index} value={val}>{val}</option>
                ))}
            </select>
        </>
    );
};

export default Select;

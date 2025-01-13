/* eslint-disable react/prop-types */
import { AppContext } from '../../App'
import { useContext } from 'react';

const LinkButtons = (props) => {
    const {toggleMenu} = useContext(AppContext);

    const scrollTo = () => {
        props.targetRef?.current?.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(false);
    };

    return (
        <button onClick={scrollTo} className={props.font}>{props.name}</button>
    );
};

export default LinkButtons;
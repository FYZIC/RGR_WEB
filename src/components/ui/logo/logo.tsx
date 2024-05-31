import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Logo(): JSX.Element {
    return (
        <Link to='/' className='logo'>
            <img src="/assets/logo.png" width='70' height='70' alt="локотип компании." />
            <p className="logo__name">Неразбитые мечты</p>
        </Link>
    );
}

export default Logo;
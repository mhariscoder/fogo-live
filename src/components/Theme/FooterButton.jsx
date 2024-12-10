import React from 'react';
import { Button } from 'react-bootstrap';
import ThemeLoader from './ThemeLoader';

const FooterSaveButton = ({ disabled = false }) => {
    return (
        <div className='footer-button d-flex align-items-center flex-column'>
            <Button className='theme-btn' type='submit' disabled={disabled}>{disabled ? <ThemeLoader /> : "Save"}</Button>
            <div className='line'></div>
        </div>
    )
}

export default FooterSaveButton;
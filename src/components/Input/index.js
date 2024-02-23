import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Input({ type, label, value, onChange }) {
    const [inputType, setInputType] = useState(type);

    const handleClick = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className={cx('input-wrap')}>
            <div className={cx('row')}>
                <label className={cx('label')} htmlFor={label}>
                    {label}
                </label>
                {label === 'Password' && (
                    <img
                        className={cx('icon')}
                        src={inputType === 'password' ? images.hide : images.show}
                        alt="eye"
                        onClick={handleClick}
                    />
                )}
            </div>
            <input className={cx('input')} type={inputType} id={label} value={value} onChange={onChange} />
        </div>
    );
}

export default Input;

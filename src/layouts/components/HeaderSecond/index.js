import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HeaderSecond.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeaderSecond() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <Link to="/" className={cx('back')}>
                    <img className={cx('icon')} src={images.arrowLeft} alt="ArrowLeft" />
                    Back
                </Link>
                <img className={cx('logo')} src={images.logo} alt="Wow Wraps" />
            </div>
        </header>
    );
}

export default HeaderSecond;

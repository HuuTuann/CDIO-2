import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Navigation, Action } from '~/components';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <img className={cx('logo')} src={images.logo} alt="Wow Wraps" />
                <Navigation />
                <Action />
            </div>
        </header>
    );
}

export default Header;

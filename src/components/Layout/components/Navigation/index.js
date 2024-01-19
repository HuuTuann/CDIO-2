import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img className={cx('logo')} src={images.logo} alt="Wow Wraps"></img>
                <nav className={cx('nav')}></nav>
            </div>
        </>
    );
}

export default Navigation;

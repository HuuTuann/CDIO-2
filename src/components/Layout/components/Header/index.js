import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ children }) {
    return (
        <>
            <header className={cx('wrapper')}>{children}</header>
        </>
    );
}

export default Header;

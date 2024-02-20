import { NavLink, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
    const getClassName = ({ isActive }) => {
        return cx('item__link', isActive ? styles.active : '');
    };

    return (
        <ul className={cx('list-items')}>
            <li className={cx('item')}>
                <NavLink className={getClassName} to="/">
                    Home
                </NavLink>
            </li>
            <li className={cx('item')}>
                <Link className={cx('item__link')} to="">
                    Menu
                </Link>
            </li>
            <li className={cx('item')}>
                <Link className={cx('item__link')} to="">
                    Blog
                </Link>
            </li>
            <li className={cx('item')}>
                <NavLink className={getClassName} to="/pages">
                    Pages
                </NavLink>
            </li>
            <li className={cx('item')}>
                <NavLink className={getClassName} to="/contact">
                    Contact
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;

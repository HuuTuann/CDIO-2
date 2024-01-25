import { Link } from 'react-router-dom';
import styles from './Action.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Action() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/login" className={cx('login')}>
                Login
            </Link>
            <Link to="/signup" className={cx('signup')}>
                Sign Up
            </Link>
        </div>
    );
}

export default Action;

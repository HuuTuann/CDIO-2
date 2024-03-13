import { Link } from 'react-router-dom';
import styles from './Action.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Action() {
    const isLogged = localStorage.getItem('isLogged') || false;

    return (
        <div className={cx('wrapper')}>
            {isLogged ? (
                <>
                    <Link to="/cart">
                        <img className={cx('icon')} src={images.shoppingCart} alt="Shopping cart" />
                    </Link>
                    <img
                        className={cx('icon')}
                        src={images.logOut}
                        alt="User"
                        onClick={() => {
                            localStorage.removeItem('isLogged');
                            window.location.href = '/';
                        }}
                    />
                </>
            ) : (
                <>
                    <Link to="/login" className={cx('login')}>
                        Login
                    </Link>
                    <Link to="/signup" className={cx('signup')}>
                        Sign Up
                    </Link>
                </>
            )}
        </div>
    );
}

export default Action;

import classNames from 'classnames/bind';
import styles from './Subscribe.module.scss';
import images from '~/assets/images';
import { BackgroundImage } from '~/components';

const cx = classNames.bind(styles);

function Subscribe() {
    return (
        <BackgroundImage>
            <div className={cx('subscribe')}>
                <div className={cx('content')}>
                    <h2 className={cx('heading')}>Newsletter</h2>
                    <p className={cx('desc')}>Subscribe to our newsletter and receive 15% discount from your order.</p>
                </div>
                <form className={cx('form')}>
                    <input id="email" type="email" className={cx('input')} placeholder="Enter your email address" />
                    <button type="submit" className={cx('btn')}>
                        <img className={cx('icon')} src={images.arrowRightLarge} alt="Button" />
                    </button>
                </form>
            </div>
        </BackgroundImage>
    );
}

export default Subscribe;

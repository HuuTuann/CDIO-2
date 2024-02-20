import classNames from 'classnames/bind';
import styles from './HeroPages.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeroPages() {
    return (
        <div className={cx('hero-pages')}>
            <img className={cx('image')} src={images.heroPages} alt="Banner" />
            <div className={cx('layer')} />
            <div className={cx('content')}>
                <h1 className={cx('heading')}>Food is not just eating energy</h1>
                <p className={cx('desc')}>It’s an experience.</p>
                <button type="button" className={cx('button')}>
                    Order Now
                </button>
            </div>
        </div>
    );
}

export default HeroPages;

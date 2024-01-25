import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import Banner from './Banner';
import Content from './Content';

const cx = classNames.bind(styles);

function Hero() {
    return (
        <div className={cx('hero')}>
            <div className={cx('container')}>
                <Content />
                <Banner />
            </div>
        </div>
    );
}

export default Hero;

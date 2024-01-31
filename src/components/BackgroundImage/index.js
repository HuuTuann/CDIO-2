import classNames from 'classnames/bind';
import styles from './BackgroundImage.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BackgroundImage({ children }) {
    return (
        <div className={cx('background-image')}>
            <img className={cx('image')} src={images.total} alt="Food" />
            <div className={cx('layer')}></div>
            {children}
        </div>
    );
}

export default BackgroundImage;

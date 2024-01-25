import classNames from 'classnames/bind';
import styles from './LayerImage.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LayerImage() {
    return (
        <div className={cx('layer')}>
            <div className={cx('action')}>
                <img src={images.shoppingCart} alt="Shopping cart" />
                <img src={images.lovely} alt="Lovely" />
            </div>
        </div>
    );
}

export default LayerImage;

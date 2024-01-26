import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './LayerImage.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LayerImage() {
    const [loved, setLoved] = useState(false);

    const handleLoved = () => {
        setLoved(!loved);
    };

    return (
        <div className={cx('layer')}>
            <div className={cx('action')}>
                <img className={cx('shopping-cart')} src={images.shoppingCart} alt="Shopping cart" />
                <img
                    className={cx('lovely')}
                    src={loved ? images.loved : images.love}
                    alt="Lovely"
                    onClick={handleLoved}
                />
            </div>
        </div>
    );
}

export default LayerImage;

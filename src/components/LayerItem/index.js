import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './LayerItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LayerItem({ id, image, height = 30 }) {
    const [loved, setLoved] = useState(false);

    const handleLoved = () => {
        setLoved(!loved);
    };

    return (
        <div className={cx('layer-item')}>
            <img className={cx('image')} src={image} alt="Image" style={{ height: `${height}rem` }} />
            <div className={cx('layer')} />
            <div className={cx('action')}>
                <img className={cx('shopping-cart')} src={images.shoppingCart} alt="Shopping cart" />
                <Link to={`/product-detail/${id}`}>
                    <img className={cx('information')} src={images.information} alt="Information" />
                </Link>
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

export default LayerItem;

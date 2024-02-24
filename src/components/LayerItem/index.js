import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './LayerItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LayerItem({ id, image, price, height = 30 }) {
    const [loved, setLoved] = useState(false);

    const handleLoved = () => {
        setLoved(!loved);
    };

    const handleClick = () => {
        const cart = JSON.parse(localStorage.getItem('carts')) || [];
        const findIndex = cart.findIndex((item) => item.id === id);
        if (findIndex !== -1) {
            cart[findIndex].quantity += 1;
        } else {
            cart.push({ id, quantity: 1, price });
        }
        localStorage.setItem('carts', JSON.stringify(cart));
    };

    return (
        <div className={cx('layer-item')}>
            <img className={cx('image')} src={image} alt="Image" style={{ height: `${height}rem` }} />
            <div className={cx('layer')} />
            <div className={cx('action')}>
                <img
                    className={cx('shopping-cart')}
                    src={images.shoppingCart}
                    alt="Shopping cart"
                    onClick={handleClick}
                />
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

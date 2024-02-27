import { useState } from 'react';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import classNames from 'classnames/bind';

import styles from './LayerItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LayerItem({ id, image, price, height = 30 }) {
    const [loved, setLoved] = useState(false);

    const handleLoved = () => {
        setLoved(!loved);
    };

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (type) => {
        api[type]({
            message: 'Order Success',
            description: 'Your item has been added to your cart. You can check it out now.',
        });
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
            {contextHolder}
            <img className={cx('image')} src={image} alt="Food" style={{ height: `${height}rem` }} />
            <div className={cx('layer')} />
            <div className={cx('action')}>
                <img
                    className={cx('shopping-cart')}
                    src={images.shoppingCart}
                    alt="Shopping cart"
                    onClick={() => {
                        handleClick();
                        openNotification('success');
                    }}
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

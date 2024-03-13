import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import classNames from 'classnames/bind';

import styles from './LayerItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LayerItem({ id, image, height = 30 }) {
    const [carts, setCarts] = useState([]);
    const [loved, setLoved] = useState(false);

    useEffect(() => {
        getCart(1);
    }, []);

    const getCart = async (customerID) => {
        const res = await fetch(`http://localhost:8080/customerID=${customerID}`);
        const data = await res.json();
        setCarts(data);
    };

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

    const handleClick = (id) => {
        const newCarts = carts.map((item) => {
            if (item.id === id) {
                item.quantity += 1;
            }
            return item;
        });
        setCarts(newCarts);
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
                        handleClick(id);
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

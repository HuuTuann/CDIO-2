import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CartItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CartItem({ id, image, name, price, quantity }) {
    const [count, setCount] = useState(quantity);

    const handleClick = (type) => {
        const carts = JSON.parse(localStorage.getItem('carts')) || [];
        const findIndex = carts.findIndex((item) => item.id === id);
        if (findIndex !== -1) {
            console.log(typeof (parseInt(carts[findIndex].quantity) + (type === 'increase' ? 1 : -1)));
            carts[findIndex].quantity = parseInt(carts[findIndex].quantity) + (type === 'increase' ? 1 : -1);
        }
        setCount(carts[findIndex].quantity);
        localStorage.setItem('carts', JSON.stringify(carts));
    };

    const handleChange = (count) => {
        if (/^[1-9]\d*$/.test(count)) {
            setCount(count);
            const carts = JSON.parse(localStorage.getItem('carts')) || [];
            const findIndex = carts.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
                carts[findIndex].quantity = count;
            }
            localStorage.setItem('carts', JSON.stringify(carts));
        }
    };

    console.log('render');

    return (
        <div className={cx('item')} key={id}>
            <img className={cx('image')} src={image} alt="Product" />
            <div className={cx('info')}>
                <h3 className={cx('name')}>{name}</h3>
                <div className={cx('inline')}>
                    <div className={cx('price')}>{`$ ${price}.00`}</div>
                    <div className={cx('action')}>
                        <img
                            className={cx('decrease')}
                            src={images.buttonMinus}
                            alt="Decrease"
                            onClick={() => {
                                handleClick('decrease');
                            }}
                        />
                        <input
                            type="text"
                            className={cx('quantity')}
                            value={count}
                            onChange={(e) => {
                                handleChange(e.target.value);
                            }}
                        />
                        <img
                            className={cx('increase')}
                            src={images.buttonPlus}
                            alt="Increase"
                            onClick={() => {
                                handleClick('increase');
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

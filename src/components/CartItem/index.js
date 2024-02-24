import classNames from 'classnames/bind';

import styles from './CartItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CartItem({ id, image, name, price, quantity, handleClick, handleChange, handleChecked, handleDelete }) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const findIndex = orders.findIndex((item) => item.id === id);

    return (
        <div className={cx('item')} key={id}>
            <img
                className={cx('icon-check')}
                src={findIndex !== -1 ? images.checkedCart : images.unCheckedCart}
                alt="Handle Check Cart"
                onClick={() => {
                    handleChecked(id, name, quantity, price);
                }}
            />
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
                                handleClick(id, 'decrease');
                            }}
                        />
                        <input
                            type="text"
                            className={cx('quantity')}
                            value={quantity}
                            onChange={(e) => {
                                handleChange(id, e.target.value);
                            }}
                        />
                        <img
                            className={cx('increase')}
                            src={images.buttonPlus}
                            alt="Increase"
                            onClick={() => {
                                handleClick(id, 'increase');
                            }}
                        />
                    </div>
                </div>
            </div>
            <img
                className={cx('icon-delete')}
                src={images.deleteItemInCart}
                alt="Delete"
                onClick={() => {
                    handleDelete(id);
                }}
            />
        </div>
    );
}

export default CartItem;

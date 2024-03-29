import { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import images from '~/assets/images';
import { CartItem, Button } from '~/components';
import { getCart } from '~/services/UserService';

const cx = classNames.bind(styles);

function Cart() {
    // const [items, setItems] = useState([]);

    // useEffect(async () => {
    //     const response = await fetch('http://localhost:8080/items');
    //     const jsonData = await response.json();
    //     setItems(jsonData);
    // }, []);

    // // Handle +/- button and input change
    // const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('carts')) || []);
    // const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

    // const handleClick = (id, type) => {
    //     const findIndex = carts.findIndex((item) => item.id === id);
    //     const value = parseInt(carts[findIndex].quantity) + (type === 'increase' ? 1 : -1);
    //     const newCarts = [...carts];
    //     if (findIndex !== -1) {
    //         newCarts[findIndex].quantity = value;
    //     } else throw new Error('Item not found');
    //     setCarts(newCarts);
    //     localStorage.setItem('carts', JSON.stringify(newCarts));

    //     const isCheckedIndex = orders.findIndex((item) => item.id === id);
    //     if (isCheckedIndex !== -1) {
    //         const newOrders = [...orders];
    //         newOrders[isCheckedIndex].quantity = value;
    //         setOrders(newOrders);
    //         localStorage.setItem('orders', JSON.stringify(newOrders));
    //     }
    // };

    // const handleChange = (id, quantity) => {
    //     if (/^[1-9]\d*$/.test(quantity)) {
    //         const findIndex = carts.findIndex((item) => item.id === id);
    //         const newCarts = [...carts];
    //         if (findIndex !== -1) {
    //             newCarts[findIndex].quantity = parseInt(quantity);
    //         } else throw new Error('Item not found');
    //         setCarts(newCarts);
    //         localStorage.setItem('carts', JSON.stringify(newCarts));

    //         const isCheckedIndex = orders.findIndex((item) => item.id === id);
    //         if (isCheckedIndex !== -1) {
    //             const newOrders = [...orders];
    //             newOrders[isCheckedIndex].quantity = parseInt(quantity);
    //             setOrders(newOrders);
    //             localStorage.setItem('orders', JSON.stringify(newOrders));
    //         }
    //     }
    // };

    // // Handle Check Cart
    // const handleChecked = (id, name, quantity, price) => {
    //     const findIndex = orders.findIndex((item) => item.id === id);
    //     const newOrders = [...orders];
    //     if (findIndex !== -1) {
    //         newOrders.splice(findIndex, 1);
    //     } else {
    //         newOrders.push({ id, name, quantity, price });
    //     }
    //     setOrders(newOrders);
    //     localStorage.setItem('orders', JSON.stringify(newOrders));
    // };

    // // Handle Delete Item
    // const handleDelete = (id) => {
    //     const newCarts = carts.filter((item) => item.id !== id);
    //     setCarts(newCarts);
    //     localStorage.setItem('carts', JSON.stringify(newCarts));

    //     const newOrders = orders.filter((item) => item.id !== id);
    //     setOrders(newOrders);
    //     localStorage.setItem('orders', JSON.stringify(newOrders));
    // };

    const customerID = localStorage.getItem('customerID');
    const [carts, setCarts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getCartAPI(customerID);
    }, []);

    useEffect(() => {
        const newOrders = carts.filter((item) => item.checked);
        setOrders(newOrders);
    }, [carts]);

    // Handle Provisional
    const memorizedProvisional = useMemo(
        () => orders.reduce((acc, item) => acc + item.quantity * item.price, 0),
        [orders],
    );

    const getCartAPI = async (customerID) => {
        const res = await getCart(customerID);
        setCarts(res.data.cart.customer);
    };

    const handleClick = (id, type) => {
        const newCarts = carts.map((item) => {
            if (item.id === id) {
                if (type === 'increase') {
                    return { ...item, quantity: item.quantity + 1 };
                }
                if (type === 'decrease' && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCarts(newCarts);
        console.log(carts);
    };

    const handleChange = (id, quantity) => {
        if (/^[1-9]\d*$/.test(quantity)) {
            const newCarts = carts.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: parseInt(quantity) };
                }
                return item;
            });
            setCarts(newCarts);
        }
    };

    const handleChecked = (id) => {
        const newCarts = carts.map((item) => {
            if (item.id === id) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setCarts(newCarts);
    };

    const handleDelete = (id) => {
        const newCarts = carts.filter((item) => item.id !== id);
        setCarts(newCarts);
    };

    return (
        <section className={cx('cart')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Your Cart</h1>
                <div className={cx('body')}>
                    <div className={cx('list')}>
                        {carts.map((item, index) => {
                            const info = {
                                id: item.id,
                                image: images[item.image],
                                name: item.name,
                                price: item.price,
                                quantity: item.quantity,
                                checked: item.checked,
                            };
                            return (
                                <CartItem
                                    key={`cart-item-${index}`}
                                    info={info}
                                    handleClick={handleClick}
                                    handleChange={handleChange}
                                    handleChecked={handleChecked}
                                    handleDelete={handleDelete}
                                />
                            );
                        })}
                    </div>
                    {orders.length > 0 && (
                        <div className={cx('provisional')}>
                            <div className={cx('info')}>
                                {orders.map((item, index) => (
                                    <div key={index} className={cx('item')}>
                                        <h3 className={cx('name')}>{item.name}</h3>
                                        <p className={cx('quantity')}>{`x ${item.quantity}`}</p>
                                        <p className={cx('sub-total')}>{`${item.quantity * item.price}.00`}</p>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('separate')} />
                            <div className={cx('action')}>
                                <div className={cx('col')}>
                                    <div className={cx('title')}>Provisional</div>
                                    <div className={cx('price')}>{`$ ${memorizedProvisional}.00`}</div>
                                </div>
                                <div className={cx('checkout')}>
                                    <Button type="rounded" value={'Order now'} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Cart;

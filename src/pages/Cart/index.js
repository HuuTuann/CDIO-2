import { useState, useMemo } from 'react';
import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import images from '~/assets/images';
import { CartItem, Button } from '~/components';

const cx = classNames.bind(styles);

function Cart() {
    const items = [
        {
            id: 'BF1',
            category: 'breakfast',
            name: 'Egg Frittata Muffins',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 24,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestBreakfast_1,
        },
        {
            id: 'BF2',
            category: 'breakfast',
            name: 'Breakfast Bars',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 29,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestBreakfast_2,
        },
        {
            id: 'BF3',
            category: 'breakfast',
            name: 'Breakfast Sandwiches',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 19,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestBreakfast_3,
        },
        {
            id: 'L1',
            category: 'lunch',
            name: 'Crispy chicken breasts',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 54,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestLunch_1,
        },
        {
            id: 'L2',
            category: 'lunch',
            name: 'Schezwan Noodles',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 49,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestLunch_2,
        },
        {
            id: 'L3',
            category: 'lunch',
            name: 'New Lubina Marinada',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 59,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestLunch_3,
        },
        {
            id: 'D1',
            category: 'dinner',
            name: 'Crispy chicken breasts',
            desc: 'Fresh toasted sourdough bread with oDive oil and pomegranate.',
            price: 54,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestDinner_1,
        },
        {
            id: 'D2',
            category: 'dinner',
            name: 'Schezwan Noodles',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 49,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestDinner_2,
        },
        {
            id: 'D3',
            category: 'dinner',
            name: 'New Lubina Marinada',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 59,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestDinner_3,
        },
        {
            id: 'S1',
            category: 'starters',
            name: 'Crispy chicken breasts',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 54,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestStarters_1,
        },
        {
            id: 'S2',
            category: 'starters',
            name: 'Schezwan Noodles',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 49,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestStarters_2,
        },
        {
            id: 'S3',
            category: 'starters',
            name: 'New Lubina Marinada',
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            price: 59,
            rating: 5,
            countOfReviewer: 12,
            image: images.suggestStarters_3,
        },
    ];

    // Handle +/- button and input change
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem('carts')) || []);
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

    const handleClick = (id, type) => {
        const findIndex = carts.findIndex((item) => item.id === id);
        const value = parseInt(carts[findIndex].quantity) + (type === 'increase' ? 1 : -1);
        const newCarts = [...carts];
        if (findIndex !== -1) {
            newCarts[findIndex].quantity = value;
        } else throw new Error('Item not found');
        setCarts(newCarts);
        localStorage.setItem('carts', JSON.stringify(newCarts));

        const isCheckedIndex = orders.findIndex((item) => item.id === id);
        if (isCheckedIndex !== -1) {
            const newOrders = [...orders];
            newOrders[isCheckedIndex].quantity = value;
            setOrders(newOrders);
            localStorage.setItem('orders', JSON.stringify(newOrders));
        }
    };

    const handleChange = (id, quantity) => {
        if (/^[1-9]\d*$/.test(quantity)) {
            const findIndex = carts.findIndex((item) => item.id === id);
            const newCarts = [...carts];
            if (findIndex !== -1) {
                newCarts[findIndex].quantity = parseInt(quantity);
            } else throw new Error('Item not found');
            setCarts(newCarts);
            localStorage.setItem('carts', JSON.stringify(newCarts));

            const isCheckedIndex = orders.findIndex((item) => item.id === id);
            if (isCheckedIndex !== -1) {
                const newOrders = [...orders];
                newOrders[isCheckedIndex].quantity = parseInt(quantity);
                setOrders(newOrders);
                localStorage.setItem('orders', JSON.stringify(newOrders));
            }
        }
    };

    // Handle Check Cart
    const handleChecked = (id, name, quantity, price) => {
        const findIndex = orders.findIndex((item) => item.id === id);
        const newOrders = [...orders];
        if (findIndex !== -1) {
            newOrders.splice(findIndex, 1);
        } else {
            newOrders.push({ id, name, quantity, price });
        }
        setOrders(newOrders);
        localStorage.setItem('orders', JSON.stringify(newOrders));
    };

    // Handle Delete Item
    const handleDelete = (id) => {
        const newCarts = carts.filter((item) => item.id !== id);
        setCarts(newCarts);
        localStorage.setItem('carts', JSON.stringify(newCarts));

        const newOrders = orders.filter((item) => item.id !== id);
        setOrders(newOrders);
        localStorage.setItem('orders', JSON.stringify(newOrders));
    };

    // Handle Provisional
    const memorizedProvisional = useMemo(
        () => orders.reduce((acc, item) => acc + item.quantity * item.price, 0),
        [orders],
    );

    return (
        <section className={cx('cart')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Your Cart</h1>
                <div className={cx('body')}>
                    <div className={cx('list')}>
                        {carts.map((item) => {
                            const product = items.find((product) => product.id === item.id);
                            return (
                                <CartItem
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    quantity={item.quantity}
                                    handleClick={handleClick}
                                    handleChange={handleChange}
                                    handleChecked={handleChecked}
                                    handleDelete={handleDelete}
                                />
                            );
                        })}
                    </div>
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
                </div>
            </div>
        </section>
    );
}

export default Cart;

import { useMemo } from 'react';
import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import images from '~/assets/images';
import { CartItem, Button } from '~/components';

const cx = classNames.bind(styles);

function Cart() {
    const carts = JSON.parse(localStorage.getItem('carts')) || [];
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

    const provisional = carts.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);

    return (
        <section className={cx('cart')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Your Cart</h1>
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
                            />
                        );
                    })}
                </div>
                <div className={cx('provisional')}>
                    <div className={cx('col')}>
                        <div className={cx('title')}>Provisional</div>
                        <div className={cx('price')}>{`$ ${provisional}.00`}</div>
                    </div>
                    <div className={cx('checkout')}>
                        <Button type="rounded" value={'Order now'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;

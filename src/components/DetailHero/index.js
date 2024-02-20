import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Rating, Product } from '~/components/';
import styles from './DetailHero.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function DetailHero() {
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

    const { id } = useParams();
    const [infoProduct, setInfoProduct] = useState(items.find((item) => item.id === id));
    const [count, setCount] = useState(1);

    useEffect(() => {
        setInfoProduct(items.find((item) => item.id === id));
        setCount(1);
    }, [id]);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    const relatedItems = items.filter((item) => item.category === infoProduct.category);

    return (
        <div className={cx('detail')}>
            <div className={cx('detail-hero')}>
                <div className={cx('container')}>
                    <figure className={cx('banner')}>
                        <img className={cx('picture')} src={infoProduct.image} alt="Food" />
                    </figure>
                    <div className={cx('content')}>
                        <h1 className={cx('heading')}>{infoProduct.name}</h1>
                        <div className={cx('rating')}>
                            <Rating rating={infoProduct.rating} />
                            <p className={cx('countOfReviewer')}>( {infoProduct.countOfReviewer} customer review )</p>
                        </div>
                        <p className={cx('price')}>$ {infoProduct.price}.00</p>
                        <p className={cx('desc')}>{infoProduct.desc}</p>
                        <div className={cx('row')}>
                            <div className={cx('actions')}>
                                <button className={cx('button')} onClick={decrease}>
                                    -
                                </button>
                                <span className={cx('count')}>{count}</span>
                                <button className={cx('button')} onClick={increase}>
                                    +
                                </button>
                            </div>
                            <button className={cx('add-to-cart')}>ADD TO CART</button>
                        </div>
                        <p className={cx('category')}>CATEGORY: {infoProduct.category}</p>
                    </div>
                </div>
            </div>

            <div className={cx('description')}>
                <div className={cx('container')}>
                    <h2 className={cx('title')}>Description</h2>
                    <p className={cx('content')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>

            <div className={cx('related')}>
                <div className={cx('container')}>
                    <h2 className={cx('title')}>Related Products</h2>
                    <div className={cx('list')}>
                        {relatedItems.map((item, index) => {
                            return <Product key={index} infoProduct={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHero;

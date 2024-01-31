import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewMenu.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function PreviewMenu() {
    const types = ['All', 'Appetizer', 'Soup', 'Dessert', 'Drinks'];
    const items = [
        {
            name: 'Chawli Beans and Mint Burger',
            price: 11,
            image: images.preMenu_1,
            type: 'Appetizer',
        },
        {
            name: 'Raw Chicken Fillet Garlic',
            price: 25,
            image: images.preMenu_2,
            type: 'Soup',
        },
        {
            name: 'American Chopsuey,  Jain Recipe',
            price: 16,
            image: images.preMenu_3,
            type: 'Appetizer',
        },
        {
            name: 'Makai Shorba, Thick Corn Soup',
            price: 14,
            image: images.preMenu_4,
            type: 'Drinks',
        },
        {
            name: 'Paneer Nuggets, Quick Paneer Deep-fried',
            price: 15,
            image: images.preMenu_5,
            type: 'Soup',
        },
        {
            name: 'Healthy Salmon Power Bowl',
            price: '09',
            image: images.preMenu_6,
            type: 'Appetizer',
        },
        {
            name: 'Stir Fried Mixed Vegetables in Butter',
            price: 23,
            image: images.preMenu_7,
            type: 'Dessert',
        },
        {
            name: 'Paneer N Cheese Roll (Wraps and Rolls)',
            price: 10,
            image: images.preMenu_8,
            type: 'Dessert',
        },
    ];

    const [selectedType, setSelectedType] = useState(0);

    const handleTypeClick = (index) => {
        setSelectedType(index);
    };

    const getType = () => {
        return types.map((type, index) => {
            return (
                <button
                    key={index}
                    className={cx('type-btn', {
                        'type-btn--active': selectedType === index,
                    })}
                    onClick={() => handleTypeClick(index)}
                >
                    {type}
                </button>
            );
        });
    };

    const getItems = () => {
        let resuslt = [];
        if (selectedType === 0) resuslt = items;
        else resuslt = items.filter((item) => item.type === types[selectedType]);
        return resuslt.map((item, index) => {
            return (
                <div key={index} className={cx('item')}>
                    <img className={cx('image')} src={item.image} alt={item.name} />
                    <div className={cx('info')}>
                        <p className={cx('name')}>{item.name}</p>
                        <p className={cx('price')}>${item.price}</p>
                    </div>
                </div>
            );
        });
    };

    return (
        <section className={cx('preview-menu')}>
            <div className={cx('container')}>
                <p className={cx('title')}>Our menu</p>
                <h2 className={cx('heading')}>Choose & Taste What You Like </h2>
                <p className={cx('desc')}>
                    A list of top Bangladeshi food including mains, drinks, and deserts you must try while in
                    Bangladesh, for an authentic experience. Check now!
                </p>
                <div className={cx('type')}>{getType()}</div>
                <div className={cx('items')}>{getItems()}</div>
            </div>
        </section>
    );
}

export default PreviewMenu;

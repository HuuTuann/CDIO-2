import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { Rating } from '~/components';
import LayerItem from '~/components/LayerItem';
import styles from './MostPopular.module.scss';

const cx = classNames.bind(styles);

function MostPopular() {
    const listItem = [
        {
            name: 'Schezwan Noodless',
            price: 49,
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            rating: 5,
            image: images.mostPopular_1,
        },
        {
            name: 'Schezwan Noodless',
            price: 49,
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            rating: 4,
            image: images.mostPopular_2,
        },
        {
            name: 'Schezwan Noodless',
            price: 49,
            desc: 'Fresh toasted sourdough bread with olive oil and pomegranate.',
            rating: 4,
            image: images.mostPopular_3,
        },
    ];

    const renderItem = () => {
        return listItem.map((item, index) => {
            return (
                <section key={index} className={cx('item')}>
                    <LayerItem image={item.image} />
                    <section className={cx('content')}>
                        <div className={cx('row-info')}>
                            <h3 className={cx('name')}>{item.name}</h3>
                            <p className={cx('price')}>
                                <span>$</span>
                                <span className={cx('value')}>{item.price}</span>
                            </p>
                        </div>
                        <p className={cx('desc')}>{item.desc}</p>
                        <div className={cx('row-action')}>
                            <Link className={cx('link-to-menu')} to="/menu">
                                Order now
                            </Link>
                            <Rating rating={item.rating} />
                        </div>
                    </section>
                </section>
            );
        });
    };

    return (
        <div className={cx('most-popular')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Most popular food</h2>
                <p className={cx('title')}>
                    A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in
                    Bangladesh, for an authentic experience. Check now!
                </p>
                <div className={cx('list')}>{renderItem()}</div>
                <div className={cx('link-to-menu')}>
                    <Link className={cx('link')} to="/menu">
                        Explore All Food
                        <img src={images.arrowRight} alt="Arrow right" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MostPopular;

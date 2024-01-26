import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './MostPopular.module.scss';
import images from '~/assets/images';
import Item from './Item';

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

    return (
        <div className={cx('most-popular')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Most popular food</h2>
                <p className={cx('title')}>
                    A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in
                    Bangladesh, for an authentic experience. Check now!
                </p>
                <div className={cx('list')}>
                    {listItem.map((item, index) => {
                        return <Item key={index} item={item} />;
                    })}
                </div>
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

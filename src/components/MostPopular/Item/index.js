import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Item.module.scss';
import LayerImage from '~/components/LayerImage';
import Rating from '../Rating';

const cx = classNames.bind(styles);

function Item({ item }) {
    return (
        <section className={cx('item')}>
            <img src={item.image} alt="Food" />
            <LayerImage />
            <section className={cx('content')}>
                <div className={cx('row')}>
                    <h3 className={cx('name')}>{item.name}</h3>
                    <p className={cx('price')}>
                        <span>$</span>
                        <span className={cx('value')}>{item.price}</span>
                    </p>
                </div>
                <p className={cx('desc')}>{item.desc}</p>
                <div className={cx('row')}>
                    <Link className={cx('link-to-menu')} to="/menu">
                        Order now
                    </Link>
                    <Rating rating={item.rating} />
                </div>
            </section>
        </section>
    );
}

export default Item;

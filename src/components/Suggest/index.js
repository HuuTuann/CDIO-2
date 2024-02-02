import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { LayerItem } from '~/components';
import styles from './Suggest.module.scss';

const cx = classNames.bind(styles);

function Suggest({ props }) {
    const getItem = (item, index) => {
        console.log(item);
        return (
            <div key={index} className={cx('item')}>
                <img className={cx('image')} src={item.image} alt="Image" />
                <LayerItem />
                <div className={cx('content')}>
                    <h3 className={cx('name')}>{item.name}</h3>
                    <p className={cx('desc')}>{item.desc}</p>
                    <div className={cx('row')}>
                        <Link to="/" className={cx('link')}>
                            Order now
                        </Link>
                        <p className={cx('price')}>
                            $<span className={cx('value')}>{item.price}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={cx('suggest')}>
            <h2 className={cx('heading')}>{props.type}</h2>
            <div className={cx('list')}>{props.list.map((item, index) => getItem(item, index))}</div>
        </div>
    );
}

export default Suggest;

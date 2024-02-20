import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { LayerItem } from '~/components';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ infoProduct, index }) {
    return (
        <div key={index} className={cx('product')}>
            <LayerItem id={infoProduct.id} image={infoProduct.image} height={40} />
            <div className={cx('content')}>
                <h3 className={cx('name')}>{infoProduct.name}</h3>
                <p className={cx('desc')}>{infoProduct.desc}</p>
                <div className={cx('row')}>
                    <Link to="/" className={cx('link')}>
                        Order now
                    </Link>
                    <p className={cx('price')}>
                        $<span className={cx('value')}>{infoProduct.price}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;

import classNames from 'classnames/bind';

import { LayerItem } from '~/components';
import styles from './Product.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Product({ infoProduct, index }) {
    const path = infoProduct.image;

    return (
        <div key={index} className={cx('product')}>
            <LayerItem id={infoProduct.id} image={images[path]} price={infoProduct.price} height={40} />
            <div className={cx('content')}>
                <h3 className={cx('name')}>{infoProduct.name}</h3>
                <p className={cx('desc')}>{infoProduct.desc}</p>
                <div className={cx('row')}>
                    <p className={cx('link')}>Order now</p>
                    <p className={cx('price')}>
                        $<span className={cx('value')}>{infoProduct.price}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;

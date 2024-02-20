import classNames from 'classnames/bind';

import { Product } from '~/components';
import styles from './Suggest.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Suggest({ items }) {
    const getItem = (item, index) => {
        return <Product index={index} infoProduct={item} />;
    };

    return (
        <div className={cx('suggest')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>{items.type}</h2>
                <img className={cx('icon')} src={images.suggestIcon} alt="Icon" />
                <div className={cx('list')}>{items.list.map((item, index) => getItem(item, index))}</div>
            </div>
        </div>
    );
}

export default Suggest;

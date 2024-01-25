import classNames from 'classnames/bind';
import styles from './MostPopular.module.scss';

const cx = classNames.bind(styles);

function MostPopular() {
    return <div className={cx('most-popular')}></div>;
}

export default MostPopular;

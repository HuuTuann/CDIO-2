import classNames from 'classnames/bind';
import styles from './Rating.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Rating({ rating }) {
    let star = [];
    for (let i = 0; i < 5; i++) {
        star.push(<img key={i} src={i < rating ? images.starYellow : images.starBlack} alt="star" />);
    }
    return <div className={cx('rating')}>{star}</div>;
}

export default Rating;

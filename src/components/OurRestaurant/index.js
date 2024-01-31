import classNames from 'classnames/bind';
import styles from './OurRestaurant.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OurRestaurant() {
    const listImages = [
        images.ourRestaurant_1,
        images.ourRestaurant_2,
        images.ourRestaurant_3,
        images.ourRestaurant_4,
        images.ourRestaurant_5,
    ];

    return (
        <div className={cx('our-restaurant')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Visit Our Restaurant</h2>
                <p className={cx('desc')}>
                    Quality country-style menu selection, friendly and efficient service, combined with genuine value
                    has kept Our Best serving families like yours for over 28.
                </p>
                <div className={cx('banner')}>
                    {listImages.map((item, index) => {
                        return <img key={index} className={cx('item')} src={item} alt="" />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default OurRestaurant;

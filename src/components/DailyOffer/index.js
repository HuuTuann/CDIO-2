import classNames from 'classnames/bind';
import styles from './DailyOffer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function DailyOffer() {
    const lists = [
        {
            image: images.dailyOfferSmall_1,
            subHeading: 'Spicy Club',
            desc: 'Pork, chicken and vegetable fried rolls served with lettuce wraps',
            price: 42,
        },
        {
            image: images.dailyOfferSmall_2,
            subHeading: 'Almond baked Brie',
            desc: 'Pork, chicken and vegetable fried rolls served with lettuce wraps',
            price: 38,
        },
        {
            image: images.dailyOfferSmall_3,
            subHeading: 'Tuscan Flatbread',
            desc: 'Pork, chicken and vegetable fried rolls served with lettuce wraps',
            price: 49,
        },
    ];

    const getItem = () => {
        return lists.map((item, index) => {
            return (
                <div key={index} className={cx('item')}>
                    <img className={cx('image')} src={item.image} alt="Food" />
                    <div className={cx('content')}>
                        <h3 className={cx('sub-heading')}>{item.subHeading}</h3>
                        <p className={cx('desc')}>{item.desc}</p>
                    </div>
                    <span className={cx('price')}>${item.price}</span>
                </div>
            );
        });
    };

    return (
        <section className={cx('daily-offers')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>Our Daily Offers</h2>
                <div className={cx('body')}>
                    <div className={cx('banner')}>
                        <figure className={cx('image-wrap')}>
                            <img className={cx('image')} src={images.dailyOfferLarge} alt="Banner" />
                        </figure>
                        <div className={cx('content')}>
                            <p className={cx('type')}>Lunch Time</p>
                            <p className={cx('offer')}>
                                <span className={cx('percent')}>30%</span> off
                            </p>
                            <p className={cx('desc')}>We love food, lots of different and food, just like you.</p>
                            <button className={cx('btn')}>Order Now</button>
                        </div>
                    </div>
                    <div className={cx('list')}>{getItem()}</div>
                </div>
            </div>
        </section>
    );
}

export default DailyOffer;

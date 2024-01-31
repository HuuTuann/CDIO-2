import classNames from 'classnames/bind';
import styles from './OurChef.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OurChef() {
    const chefs = [
        {
            name: 'Jubed Ahmed',
            position: 'Chef',
            avatar: images.ourChef_1,
        },
        {
            name: 'Delwar hussen',
            position: 'Assistant  chef',
            avatar: images.ourChef_2,
        },
        {
            name: 'Tajul Islam',
            position: 'Chef',
            avatar: images.ourChef_3,
        },
    ];

    const getChef = () => {
        return chefs.map((chef, index) => {
            return (
                <div key={index} className={cx('chef')}>
                    <img className={cx('avt')} src={chef.avatar} alt="Chef" />
                    <h3 className={cx('name')}>{chef.name}</h3>
                    <p className={cx('position')}>{chef.position}</p>
                </div>
            );
        });
    };

    return (
        <div className={cx('our-chef')}>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>They will cook for you</h2>
                <p className={cx('desc')}>
                    Our Diners can enjoy cooking for themselves, or visiting a curated selection of restaurants in the
                    area. They will cook for you and make sure you have a home away from home at all times.
                </p>
                <div className={cx('list')}>{getChef()}</div>
            </div>
        </div>
    );
}

export default OurChef;

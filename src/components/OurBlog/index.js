import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './OurBlog.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OurBlog() {
    const items = [
        {
            date: 'August 6, 2022 ',
            name: 'The Most Expensive Cup of Coffee in the Usa',
            desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.',
            comment: 165,
            view: 1265,
            image: images.ourBlog_1,
        },
        {
            date: 'August 6, 2022 ',
            name: 'Chicken Soup With Spring Veggies Aand Pasta',
            desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.',
            comment: 165,
            view: 1265,
            image: images.ourBlog_2,
        },
    ];

    const getItem = () => {
        return items.map((item, index) => {
            return (
                <div key={index} className={cx('item')}>
                    <figure className={cx('banner')}>
                        <img src={item.image} alt="Banner" />
                    </figure>
                    <div className={cx('content')}>
                        <p className={cx('content__date')}>{item.date}</p>
                        <h2 className={cx('content__heading')}>{item.name}</h2>
                        <p className={cx('content__desc')}>{item.desc}</p>
                        <div className={cx('content__row')}>
                            <p className={cx('content__comment')}>Comment {item.comment}</p>
                            <p className={cx('content__view')}>View {item.view}</p>
                        </div>
                        <Link className={cx('content__read-now')} to="/blog">
                            Read Now
                        </Link>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={cx('our-blog')}>
            <div className={cx('container')}>
                <p className={cx('title')}>Our Blog</p>
                <h2 className={cx('heading')}>Recent Articles</h2>
                <div className={cx('list')}>{getItem()}</div>
                <Link className={cx('link-to-all')} to="/blog">
                    Explore All Blogs <img className={cx('icon')} src={images.arrowRight} alt="Arrow Right" />
                </Link>
            </div>
        </div>
    );
}

export default OurBlog;

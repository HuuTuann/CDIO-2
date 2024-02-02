import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    const data = [
        {
            title: 'Usefull Link',
            children: [
                {
                    item: 'Home',
                    to: '/',
                },
                {
                    item: 'About Us',
                    to: '/about-us',
                },
                {
                    item: 'Services',
                    to: '/services',
                },
                {
                    item: 'Booking',
                    to: '/booking',
                },
                {
                    item: 'Menu',
                    to: '/menu',
                },
            ],
        },
        {
            title: 'Contact Info',
            children: ['Silk St, Barbican, London EC2Y 8DS, UK', 'wowwraps@gmail.com', '800-123-45-678'],
        },
        {
            title: 'Follow us',
            children: ['Facebook', 'Instagram', 'Linkedin', 'Twitter'],
        },
        { title: 'Legal', children: ['Website by nhtuan010302@gmail.com', '©2022. All Rights Reserved'] },
    ];

    const renderFooter = () => {
        return data.map((item, index) => {
            return (
                <div className={cx('col')} key={index}>
                    <h2 className={cx('title')}>{item.title}</h2>
                    <div className={cx('content')}>
                        {item.children.map((child, index) => {
                            return child.to ? (
                                <Link className={cx('item')} to={child.to} key={index}>
                                    {child.item}
                                </Link>
                            ) : (
                                <p className={cx('item')} key={index}>
                                    {child}
                                </p>
                            );
                        })}
                    </div>
                </div>
            );
        });
    };

    return (
        <footer className={cx('footer')}>
            <section className={cx('container')}>
                <div className={cx('col')}>
                    <img className={cx('logo')} src={images.logo} alt="Logo" />
                    <p className={cx('desc')}>Download the WowWraps app today.</p>
                    <div className={cx('row')}>
                        <img className={cx('model')} src={images.appStore} alt="App Store" />
                        <img className={cx('model')} src={images.ggPlay} alt="Google Play" />
                    </div>
                </div>
                {renderFooter()}
            </section>
        </footer>
    );
}

export default Footer;

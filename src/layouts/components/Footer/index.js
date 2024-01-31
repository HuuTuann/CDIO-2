import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const data = [
        {
            title: 'Usefull Link',
            children: [{}],
        },
    ];

    return <footer className={cx('footer')}></footer>;
}

export default Footer;

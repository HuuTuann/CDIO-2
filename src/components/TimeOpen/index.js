import classNames from 'classnames/bind';
import styles from './TimeOpen.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function TimeOpen() {
    const timeOpen = {
        Mon: '17:00 to 23:00',
        Wed: '19:00 to 24:00',
        Thu: '14:00 to 18:00',
        Fr: '16:00 to 24:00',
        'Sat/Sun': '17:00 to 23:00',
    };

    const getTimeOpens = () => {
        const timeOpens = [];

        for (const key in timeOpen) {
            timeOpens.push(
                <li className={cx('item')} key={key}>
                    <span className={cx('day')}>{key}</span>
                    <span className={cx('time')}>{timeOpen[key]}</span>
                </li>,
            );
        }

        return <ul className={cx('list')}>{timeOpens}</ul>;
    };

    return (
        <article className={cx('time-open')}>
            <div className={cx('container')}>
                <section className={cx('address')}>
                    <img className={cx('banner')} src={images.bannerTimeOpen} alt="Banner" />
                    <div className={cx('layer')} />
                    <div className={cx('body')}>
                        <h2 className={cx('heading')}>Find us gere</h2>
                        <p className={cx('paragraph')}>Avenue Marina 34568 NY (U.S)</p>
                        <p className={cx('phone')}>+0123 456 7890</p>
                        <p className={cx('mail')}>wowwraps@gmail.com</p>
                    </div>
                </section>
                <section className={cx('content')}>
                    <h2 className={cx('heading')}>Opening Times</h2>
                    {getTimeOpens()}
                </section>
            </div>
        </article>
    );
}

export default TimeOpen;

import { useState, useMemo, useRef } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames/bind';

import styles from './ReserveBook.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ReserveBook() {
    const currDate = useRef(dayjs());
    const maxDate = useMemo(() => dayjs().add(7, 'day').get('date'), []);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

    const currGuest = useRef(1);

    const [date, setDate] = useState(currDate.current.get('date'));
    const [month, setMonth] = useState(currDate.current.get('month'));
    const [guest, setGuest] = useState(currGuest.current);

    const handleDate = (type) => {
        type === 'increase'
            ? (currDate.current = currDate.current.add(1, 'day'))
            : (currDate.current = currDate.current.subtract(1, 'day'));
        setDate(currDate.current.get('date'));
        setMonth(currDate.current.get('month'));
    };

    const handleGuest = (type) => {
        type === 'increase' ? (currGuest.current += 1) : (currGuest.current -= 1);
        setGuest(currGuest.current);
    };

    return (
        <div className={cx('reverse-book')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h2 className={cx('heading')}>Reserve! Book Now</h2>
                    <div className={cx('row')}>
                        <div className={cx('set-date')}>
                            <h3 className={cx('title')}>Set date</h3>
                            <div className={cx('wrapper')}>
                                <p className={cx('month')}>{months[month]}</p>
                                <p className={cx('date')}>{date < 10 ? `0${date}` : date}</p>
                                <div className={cx('action')}>
                                    <img
                                        className={cx('icon', {
                                            disabled: date === maxDate,
                                        })}
                                        src={images.increase}
                                        alt="Increase"
                                        onClick={date === maxDate ? null : () => handleDate('increase')}
                                    />
                                    <img
                                        className={cx('icon', {
                                            disabled: date === dayjs().get('date'),
                                        })}
                                        src={images.decrease}
                                        alt="Decrease"
                                        onClick={date === dayjs().get('date') ? null : () => handleDate('decrease')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('set-guest')}>
                            <h3 className={cx('title')}>Guest</h3>
                            <div className={cx('wrapper')}>
                                <p className={cx('guest')}>{guest}</p>
                                <div className={cx('action')}>
                                    <img
                                        className={cx('icon')}
                                        src={images.increase}
                                        alt="Increase"
                                        onClick={() => handleGuest('increase')}
                                    />
                                    <img
                                        className={cx('icon', {
                                            disabled: guest === 1,
                                        })}
                                        src={images.decrease}
                                        alt="Decrease"
                                        onClick={guest === 1 ? null : () => handleGuest('decrease')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('btn')}>Book Now</button>
                </div>
                <div className={cx('banner')}>
                    <img className={cx('image')} src={images.reverseBook} alt="Banner" />
                </div>
            </div>
        </div>
    );
}

export default ReserveBook;

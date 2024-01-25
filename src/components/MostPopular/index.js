import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './MostPopular.module.scss';
import LayerImage from '~/components/LayerImage';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function MostPopular() {
    return (
        <div className={cx('most-popular')}>
            <div className={cx('container')}>
                {/* Sau có API thật sẽ tạo Component */}
                <h2 className={cx('heading')}>Most popular food</h2>
                <p className={cx('title')}>
                    A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in
                    Bangladesh, for an authentic experience. Check now!
                </p>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <img src={images.mostPopular_1} alt="Food" />
                        <LayerImage />
                        <div className={cx('row')}>
                            <p className={cx('name')}>Schezwan Noodless</p>
                            <p className={cx('price')}>
                                <span>$</span>
                                <span className={cx('value')}>49</span>
                            </p>
                        </div>
                        <p className={cx('desc')}>Fresh toasted sourdough bread with olive oil and pomegranate.</p>
                        <div className={cx('row')}>
                            <Link className={cx('link-to-menu')} to="/menu">
                                Order now
                            </Link>
                            <div className={cx('rating')}>
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <img src={images.mostPopular_2} alt="Food" />
                        <LayerImage />
                        <div className={cx('row')}>
                            <p className={cx('name')}>Schezwan Noodless</p>
                            <p className={cx('price')}>
                                <span>$</span>
                                <span className={cx('value')}>49</span>
                            </p>
                        </div>
                        <p className={cx('desc')}>Fresh toasted sourdough bread with olive oil and pomegranate.</p>
                        <div className={cx('row')}>
                            <Link className={cx('link-to-menu')} to="/menu">
                                Order now
                            </Link>
                            <div className={cx('rating')}>
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starBlack} alt="Star" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <img src={images.mostPopular_3} alt="Food" />
                        <LayerImage />
                        <div className={cx('row')}>
                            <p className={cx('name')}>Schezwan Noodless</p>
                            <p className={cx('price')}>
                                <span>$</span>
                                <span className={cx('value')}>49</span>
                            </p>
                        </div>
                        <p className={cx('desc')}>Fresh toasted sourdough bread with olive oil and pomegranate.</p>
                        <div className={cx('row')}>
                            <Link className={cx('link-to-menu')} to="/menu">
                                Order now
                            </Link>
                            <div className={cx('rating')}>
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starYellow} alt="Star" />
                                <img src={images.starBlack} alt="Star" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('link-all-food')}>
                    <Link className={cx('link')} to="/menu">
                        Explore All Food
                        <img src={images.arrowRight} alt="Arrow right" />
                    </Link>
                </div>
                {/* <Link className={cx('go-to-menu')} to="/menu">
                    <p className={cx('text')}></p>
                    <img src={images.arrowRight} />
                </Link> */}
            </div>
        </div>
    );
}

export default MostPopular;

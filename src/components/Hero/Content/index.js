import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Content() {
    return (
        <section className={cx('content')}>
            <p className={cx('title')}>Hi, new friend!</p>
            <h1 className={cx('heading')}>We do not cook, we create your emotions!</h1>
            <p className={cx('desc')}>
                There's evidence that cooking, like other creative practices, can boost well-being, self-esteem, and
                other measures of mental health.
            </p>
            <Link className={cx('linkMore')} to="/menu">
                Our menu
            </Link>
        </section>
    );
}

export default Content;

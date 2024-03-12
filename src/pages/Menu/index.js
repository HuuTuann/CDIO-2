import { PreviewMenu, OurChef } from '~/components';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('container')}>
            <PreviewMenu />
            <OurChef />
        </div>
    );
}

export default Menu;

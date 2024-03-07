import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ type, value, icon, onClick }) {
    return (
        <button
            className={cx('default', {
                rounded: type === 'rounded',
                secondary: type === 'secondary',
                transparent: type === 'transparent',
            })}
            type="button"
            onClick={onClick}
        >
            {icon && <img src={icon} alt="icon" />}
            {value}
        </button>
    );
}

export default Button;

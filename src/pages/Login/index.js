import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import images from '~/assets/images';
import { Input, Button } from '~/components';
import { login } from '~/services/UserService';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClick = async () => {
        let res = await login(email, password);
        console.log(res);
    };

    return (
        <div className={cx('login')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Login</h1>
                <Link to="/signup" className={cx('redirect')}>
                    Don’t have an account? Sign up
                </Link>
                <form className={cx('form')}>
                    <Input label="Email" type="email" value={email} onChange={handleEmail} />
                    <Input label="Password" type="password" value={password} onChange={handlePassword} />
                    <Button
                        type="rounded"
                        value="Login"
                        onClick={() => {
                            handleClick();
                        }}
                    />
                </form>
                <div className={cx('separator')}>
                    <span className={cx('text')}>OR</span>
                </div>
                <div className={cx('social-login')}>
                    <Button type="transparent" value="Continue with Google" icon={images.google} />
                    <Button type="transparent" value="Continue with Facebook" icon={images.fb} />
                    <Button type="transparent" value="Continue with Email" icon={images.email} />
                </div>
            </div>
        </div>
    );
}

export default Login;

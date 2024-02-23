import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import images from '~/assets/images';
import { Input, Button } from '~/components';

const cx = classNames.bind(styles);

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const textOfValidation = ['At least 8 characters', 'At least 1 number', 'At least 1 special character'];

    const [validation, setValidation] = useState([false, false, false]);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        const validationNew = [false, false, false];

        if (password.length >= 8) {
            validationNew[0] = true;
        }

        if (/\d/.test(password)) {
            validationNew[1] = true;
        }

        if (/[!@#$%^&*]/.test(password)) {
            validationNew[2] = true;
        }

        setValidation(validationNew);
    }, [password]);

    return (
        <div className={cx('signup')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Sign Up</h1>
                <Link to="/login" className={cx('redirect')}>
                    Have an account? Login
                </Link>
                <form className={cx('form')}>
                    <Input label="Name" type="text" value={name} onChange={handleName} />
                    <Input label="Email" type="text" value={email} onChange={handleEmail} />
                    <div className={cx('wrap-signup')}>
                        <Input label="Password" type="password" value={password} onChange={handlePassword} />
                        {password && (
                            <div className={cx('show-validation')}>
                                <p className={cx('title')}>
                                    Use 8 or more characters with a mix of letters, numbers & symbols
                                </p>
                                <div className={cx('body')}>
                                    {textOfValidation.map((text, index) => (
                                        <div
                                            className={cx('content', {
                                                pass: validation[index],
                                            })}
                                            key={index}
                                        >
                                            <img
                                                className={cx('icon')}
                                                src={validation[index] ? images.greenTick : images.whiteTick}
                                                alt="Tick"
                                            />
                                            <p className={cx('text')}>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <Button type="rounded" value="Sign Up" />
                </form>
                <div className={cx('separator')}>
                    <span className={cx('text')}>OR</span>
                </div>
                <div className={cx('social-signup')}>
                    <Button type="transparent" value="Sign up with Google" icon={images.google} />
                    <Button type="transparent" value="Sign up with Facebook" icon={images.fb} />
                    <Button type="transparent" value="Sign up with Email" icon={images.email} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;

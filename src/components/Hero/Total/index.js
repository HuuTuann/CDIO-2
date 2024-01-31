import classNames from 'classnames/bind';
import styles from './Total.module.scss';

const cx = classNames.bind(styles);

function Total() {
    return (
        <div className={cx('total')}>
            <div className={cx('item')}>
                <span className={cx('value')}>06</span>
                <span className={cx('desc')}>Number Restaurant</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('value')}>68</span>
                <span className={cx('desc')}>New Food Menu Dishes</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('value')}>36</span>
                <span className={cx('desc')}>Years of experience</span>
            </div>
        </div>
    );
}

export default Total;

// import { useState } from 'react';
// import classNames from 'classnames/bind';
// import styles from './Banner.module.scss';
// import assetsImages from '~/assets/images';

// const cx = classNames.bind(styles);

// const images = [
//     {
//         small: assetsImages.bannerSmall_1,
//         large: assetsImages.bannerLarge,
//     },
//     {
//         small: assetsImages.bannerSmall_2,
//         large: assetsImages.bannerSmall_2,
//     },
//     {
//         small: assetsImages.bannerSmall_3,
//         large: assetsImages.bannerSmall_3,
//     },
// ];

// function Banner() {
//     const [image, setImage] = useState(images[0]);

//     const handleChangeImage = (index) => {
//         setImage(images[index]);
//     };

//     return (
//         <div className={cx('banner')}>
//             <div className={cx('bannerLarge')}>
//                 <img src={image.large} alt="imageFood" />
//             </div>
//             <div className={cx('listBannerSmall')}>
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         className={cx('item')}
//                         src={image.small}
//                         alt="imageFood"
//                         onClick={() => handleChangeImage(index)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Banner;

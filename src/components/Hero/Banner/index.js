import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')}>
            <div className={cx('bannerLarge')}>
                <img src={images.bannerLarge} alt="imageFood" />
            </div>
            <div className={cx('listBannerSmall')}>
                <img className={cx('item')} src={images.bannerSmall_1} alt="imageFood" />
                <img className={cx('item')} src={images.bannerSmall_2} alt="imageFood" />
                <img className={cx('item')} src={images.bannerSmall_3} alt="imageFood" />
            </div>
        </div>
    );
}

export default Banner;

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

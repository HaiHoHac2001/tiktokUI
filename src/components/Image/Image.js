// import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';

import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/images';

function Image({ src, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const handleImageError = () => {
        setFallback(customFallback);
    };

    const [fallback, setFallback] = useState('');
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            {...props}
            alt="Img"
            onError={handleImageError}
        />
    );
}

// Image.propTypes = {
//     src : PropTypes.string,
//     className : PropTypes.string,
//     fallback : PropTypes.string,
// }

export default forwardRef(Image);

import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/img';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image(
    {
        src,
        alt,
        className,
        falseBack: customFalseBack = images.noImage,
        ...props
    },
    ref,
) {
    const [falseBack, setFalseBack] = useState('');
    const handleErrorImage = () => {
        setFalseBack(customFalseBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, { [className]: className })}
            ref={ref}
            src={falseBack || src}
            alt={alt}
            {...props}
            onError={handleErrorImage}
        />
    ); //glue the ref for Image component for run Tippy
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    falseBack: PropTypes.string,
};
export default forwardRef(Image);

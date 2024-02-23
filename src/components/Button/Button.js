import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);
function Button(
    {
        to,
        href,
        primary = false,
        text = false,
        outline = false,
        small = false,
        large = false,
        rounded = false,
        disabled = false,
        children,
        className,
        leftIcon,
        rightIcon,
        onClick,
        square,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        outline,
        small,
        large,
        rounded,
        square,
        disabled,
    });
    const props = {
        onClick,
        ...passProps,
    };

    //Remove events when the button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props} ref={ref}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,

    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
    square: PropTypes.bool,
};
export default forwardRef(Button);

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';

import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
// import useStore from '~/store/hook';
const cx = classNames.bind(styles);
const defaultFnc = () => {};
function Menu({
    setCurrentUser,
    children,
    items = [],
    onChange = defaultFnc,
    hideOnClick = false,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    // const [currentUser, setCurrentUser] = useStore();
    // console.log(currentUser);
    const current = history[history.length - 1];
    const onBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <div key={index}>
                    <MenuItem
                        data={item}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else if (item.title === 'Log out') {
                                setCurrentUser(false);
                            } else {
                                onChange(item);
                            }
                        }}
                    />
                </div>
            );
        });
    };
    return (
        <HeadlessTippy
            // visible

            hideOnClick={hideOnClick}
            delay={[0, 500]}
            offset={[16, 8]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header title={current.title} onBack={onBack} />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </HeadlessTippy>
    );
}
Menu.propTypes = {
    setCurrentUser: PropTypes.node,
    children: PropTypes.node.isRequired,

    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;

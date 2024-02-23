// import { createContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon } from '~/components/icons';
import Search from '../Search';
// import useStore from '~/store/hook';
import { Link } from 'react-router-dom';
import config from '~/components/config';

const cx = classNames.bind(styles);
function Header() {
    // const [state, setCurrentUser] = useStore();
    const currentUser = false;
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@ny',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Set coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            separated: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <Image src={images.logo}></Image>
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('action-btn')}
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                rounded
                                square
                            >
                                Upload
                            </Button>
                            <Tippy
                                content="Message"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                placement="bottom"
                                delay={[0, 100]}
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary> Log in</Button>
                        </>
                    )}
                    <Menu
                        appendTo={document.body}
                        // setCurrentUser={setCurrentUser}
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5c54578c8aaab29f9144236f709f2aa1.jpeg?lk3s=a5d48078&x-expires=1706670000&x-signature=HNVjdjUUls7hD101IY6HqODwrjg%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Thai SonNy"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

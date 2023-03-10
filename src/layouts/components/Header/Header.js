import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMoon,
    faSignOut,
    faUser,
    faVideo
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu/Menu';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
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
                    code: '',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Čeština (Česká republika)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Deutsch',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Suomi (Suomi)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'עברית (ישראל)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'हिंदी',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Magyar (Magyarország)',
                },
                {
                    type: 'language',
                    code: '',
                    title: '日本語（日本）',
                },
                {
                    type: 'language',
                    code: '',
                    title: '한국어 (대한민국)',
                },
                {
                    type: 'language',
                    code: '',
                    title: 'Englမြန်မာ (မြန်မာ)ish',
                },
                {
                    type: 'language',
                    code: '',
                    title: '繁體中文',
                },
                {
                    type: 'language',
                    code: '',
                    title: '简体中文',
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
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/studio',
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
        to: '/logout',
        separate: true,
    },
];

function Header() {
    // currentUser
    const currentUser = true;

    // Handle logic
    const handleOnchangeMenu = (menuItems) => {
        console.log(menuItems);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                {/* search */}
                <Search />

                {/* action */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 10]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 10]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 10]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>69</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnchangeMenu}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/326273402_556291789769248_369768734979445407_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=NaPW1jefWPkAX8F9cR8&tn=LuX8TsSe1SocMMwx&_nc_ht=scontent.fdad1-4.fna&oh=00_AfBE2LNA4gMIdzoTu8WskIeAyTp7g0UsMXFYAJWGvAgfrg&oe=63D28A72"
                                alt="Le Hong Bao Ngan"
                                fallback="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/51283494_1268544069974737_6131765697140752384_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jRiMU-Ujm5AAX8N2jm3&_nc_ht=scontent-sin6-3.xx&oh=00_AfAd-j7j01U43u-FxWobyIHCe-7JhJjJ8dfg2qR1Zm2BdA&oe=63CA3D7D"
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

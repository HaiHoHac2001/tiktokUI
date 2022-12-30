import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const INIT_PAGE = 1
const PER_PAGE = 5

const listDiscover = [
    {
        icon: <FontAwesomeIcon icon={faHashtag}/>,
        title:'suthatla'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag}/>,
        title:'mackedoi'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic}/>,
        title:'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic}/>,
        title:'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic}/>,
        title:'Thiên Thần Tình Yêu - RICKY STAR'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag}/>,
        title:'7749hieuung'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag}/>,
        title:'genzlife'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic}/>,
        title:'Tình Đã Đầy Một Tim - Huyền Tâm Môn'
    },
    {
        icon: <FontAwesomeIcon icon={faMusic}/>,
        title:'Thằng Hầu (Thái Hoàng Remix)'
    },
    {
        icon: <FontAwesomeIcon icon={faHashtag}/>,
        title:'hohachai'
    },
]

const footerLinks = [
    {
        type: "header",
        content: [
            {
                pageLink:'/',
                text: 'About'
            },
            {
                pageLink:'/',
                text: 'Newsroom'
            },
            {
                pageLink:'/',
                text: 'Contact'
            },
            {
                pageLink:'/',
                text: 'Careers'
            },
            {
                pageLink:'/',
                text: 'ByteDance'
            },
        ]
    },
    {
        type: "body1",
        content: [
            {
                pageLink:'/',
                text: 'TikTok for Good'
            },
            {
                pageLink:'/',
                text: 'Advertise'
            },
            {
                pageLink:'/',
                text: 'Developers'
            },
            {
                pageLink:'/',
                text: 'TikTok Rewards'
            },
            {
                pageLink:'/',
                text: 'TikTok Browse'
            },
            {
                pageLink:'/',
                text: 'TikTok Embeds'
            },
        ]
    },
    {
        type: "body2",
        content: [
            {
                pageLink:'/',
                text: 'Help'
            },
            {
                pageLink:'/',
                text: 'Safety'
            },
            {
                pageLink:'/',
                text: 'Terms'
            },
            {
                pageLink:'/',
                text: 'Privacy'
            },
            {
                pageLink:'/',
                text: 'Creator Portal'
            },
            {
                pageLink:'/',
                text: 'Community Guidelines'
            },
        ]
    },
    {
        type: 'copyright',
        content: [
            {
                pageLink:'/',
                text: '© 2023 TikTok'
            }
        ]
    }
]

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE)
    const [suggestedUsers, setSuggestedUsers] = useState([])

    useEffect(() => {
        userService
            .getSuggested({ page, perPage : PER_PAGE })
            .then(data => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch(err => console.error(err));
    }, [page])
    
    const handleSeeAll = () => {
        setPage(page + 1);
    }

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label = "Suggested accounts" data={suggestedUsers} onSeeAll={handleSeeAll}/>

            {/* <SuggestedAccounts label = "Following accounts" data={suggestedUsers} /> */}
            <SuggestedAccounts discover label = "Discover" data={listDiscover} />
            <SuggestedAccounts footer label = "" data={footerLinks} />

        </aside>
    );
}

export default Sidebar;
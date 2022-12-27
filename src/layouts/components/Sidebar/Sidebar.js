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

const cx = classNames.bind(styles);
const INIT_PAGE = 1
const PER_PAGE = 5

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
            {/* <SuggestedAccounts label = "Following accounts"/> */}
        </aside>
    );
}

export default Sidebar;
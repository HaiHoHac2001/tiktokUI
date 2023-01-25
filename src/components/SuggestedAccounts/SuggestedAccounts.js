import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink, Link } from 'react-router-dom';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import Button from '../Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, discover = false, footer = false, data = [], onSeeAll }) {
    // const [active, setActive] = useState(null);
    // console.log(active);
    // const router = useRouter()
    // const { topic } = router.query
    // [cx('active')]: `${active && item === active.name}`,
    if (discover) {
        // return (
        //     <div className={cx('wrapper')}>
        //         <p className={cx('label')}>{label}</p>
        //         {data.map((hashtag, idx) => (
        //             <Button className={cx('discover')} rounded leftIcon={hashtag.icon} key={idx} href="/">
        //                 {hashtag.title}
        //             </Button>
        //         ))}
        //     </div>
        // );
        return (
            <div className={cx('wrapper-discover')}>
                <p className={cx('label')}>{label}</p>
                <div className={cx('topic-list')}>
                    {data.map((item, idx) => (
                        <NavLink 
                            className={cx('topic-link',{
                                
                            })} to={`/?topic=${item.name}`} key={idx}
                            
                        >
                            <div className={cx('topic-list-item')}>
                                <span >{item.icon}
                                </span>
                                <span className={cx('topic-list-item-desc')}>{item.name}
                                </span>
                            </div>
                        </NavLink>
                        // <NavLink to={`/?topic=${item.name}`} key={idx} onClick={() => setActive(item)} className={cx(`${active === item && 'active-topic'}`)}>
                            // <div className={cx('topic-list-item')}>
                            //     <span >{item.icon}
                            //     </span>
                            //     <span className={cx('topic-list-item-desc')}>{item.name}
                            //     </span>
                            // </div>
                        // </NavLink>
                    ))}
                </div>
            </div>
        );
    } else if (footer) {
        return (
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>
                {data.map((boxLink, idx) => (
                    <div className={cx('group-link')} key={idx}>
                        {boxLink.content.map((text, idx) => (
                            <a className={cx('link-item')} key={idx} href="">
                                {text.text}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>

                {data.map((account, idx) => (
                    <AccountItem key={idx} data={account} />
                ))}

                {onSeeAll && (
                    <p className={cx('see-more')} onClick={onSeeAll}>
                        See more
                    </p>
                )}
            </div>
        );
    }
}

SuggestedAccounts.propTypes = {
    data: PropTypes.array,
};

export default SuggestedAccounts;

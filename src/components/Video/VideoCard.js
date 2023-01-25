import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Button from '../Button';
import Image from '../Image';
import styles from './VideoCard.module.scss';

const cx = classNames.bind(styles);

function Video({ data, nameMusic }) {
    return data.map((item, idx) => (
        <div key={idx}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('content')}>
                        <div className={cx('user')}>
                            <Image className={cx('avatar')} src={item.user.avatar} alt={item.user.nickname} />
                            <div className={cx('info')}>
                                <div className={cx('name')}>
                                    <h3>{item.user.nickname}</h3>
                                    {item.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                                    <p className={cx('username')}>{`${item.user.first_name} ${item.user.last_name}`}</p>
                                </div>
                                <div className={cx('description')}>
                                    <p className={cx('description-item')}>{item.description} </p>
                                </div>
                            </div>
                        </div>
                        {/* {handleBtnFl} */}
                        {item.user.is_followed ? (
                            <Button className={cx('btnFollow')} outline>
                                Following
                            </Button>
                        ) : (
                            <Button className={cx('btnFollow')} outline>
                                Follow
                            </Button>
                        )}
                    </div>
                    <div className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <a className={cx('music-link')}>
                            <span>{item.music ? item.music : nameMusic}</span>
                        </a>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('video')}>
                        <video className={cx('video-item')} src={item.file_url} controls />
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('action-item')}>
                            <div className={cx('action-item-bg')}></div>
                            <div className={cx('action-item-icon')}>
                                <FontAwesomeIcon className={cx('action-icon')} icon={faHeart} />
                                <p className={cx('action-value')}>{item.likes_count}k</p>
                            </div>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('action-item-bg')}></div>
                            <div className={cx('action-item-icon')}>
                                <FontAwesomeIcon className={cx('action-icon')} icon={faCommentDots} />
                                <p className={cx('action-value')}>{item.comments_count}k</p>
                            </div>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('action-item-bg')}></div>
                            <div className={cx('action-item-icon')}>
                                <FontAwesomeIcon className={cx('action-icon')} icon={faShare} />
                                <p className={cx('action-value')}>{item.shares_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Video;

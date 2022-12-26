import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('preview')}></div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive placement="bottom" delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1672142400&x-signature=K9nWdzQFr54QhdJ5yWbmzGghfuU%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <div className={cx('nickname')}>
                            <h4>hohachai</h4>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </div>
                        <p className={cx('name')}>Hồ Hắc Hải </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

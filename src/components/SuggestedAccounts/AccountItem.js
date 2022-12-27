import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview data={data}/>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive placement="bottom" delay={[500, 200]} offset={[-20, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx('item-info')}>
                        <div className={cx('nickname')}>
                            <h4>{data.nickname}</h4>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </div>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;

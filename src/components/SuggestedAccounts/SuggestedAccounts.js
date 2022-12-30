import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, discover = false, footer = false, data = [], onSeeAll }) {
    if (discover) {
        return (
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>
                {data.map((hashtag, idx) => (
                    <Button className={cx('discover')} rounded leftIcon={hashtag.icon} key={idx} href="/">
                        {hashtag.title}
                    </Button>
                ))}
            </div>
        );
    } else if (footer) {
        return (
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>
                {data.map((boxLink, idx) => (
                    <div className={cx('group-link')} key={idx}>
                        {boxLink.content.map((text, idx) => (
                            <a className={cx('link-item')} key={idx} href=''>
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

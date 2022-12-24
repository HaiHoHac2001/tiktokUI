import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt =""/>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
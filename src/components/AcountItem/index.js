import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AcountItem.module.scss'

const cx = classNames.bind(styles)

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/150107612_1228909274239350_7642597782695748707_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_Z7W11yxehgAX-FhmdX&_nc_ht=scontent-sin6-2.xx&oh=00_AfC1EXb4t86Sh_VmUOC7X_IdEasZrVSMxtuST-56hxPASg&oe=63C8B3D3" alt =""/>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Hồ Hắc Hải</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('username')}>Ho Hac Hai</p>
            </div>
        </div>
    );
}

export default AcountItem;
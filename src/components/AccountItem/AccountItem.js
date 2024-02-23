import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data, children }) {
    return (
        <Link to={`/@${data.username}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/00622f9562ecbb9afce77067bd5c4734.jpeg?lk3s=a5d48078&x-expires=1705464000&x-signature=GclFP3CS4U1oZNKdXzO6lO9pj6M%3D"
                alt={data.fullname}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{children}</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object,
};
export default AccountItem;

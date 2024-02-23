import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import style from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;

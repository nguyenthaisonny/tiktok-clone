import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
function Sidebar() {
    const cx = classNames.bind(style);
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;

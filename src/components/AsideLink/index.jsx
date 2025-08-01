import { NavLink, Link } from "react-router";

import styles from './asidelink.module.css'

const AsideLink = ({ href, children }) => {
    return (
        <NavLink 
            to={href} 
            className={({ isActive }) =>
                isActive ? `${styles.asidelink} ${styles.active}` : styles.asidelink
            }
        >
            {children}
        </NavLink>
    )
}

export default AsideLink
import logo from './logo.png'
import AsideLink from '../AsideLink'
import { IconFeed } from '../icons/IconFeed'
import { IconAccount } from '../icons/IconAccount'
import { IconInfo } from '../icons/IconInfo'
import { IconLogin } from '../icons/IconLogin'
import { Button } from '../Button'
import { Link } from '../Link'
import { useAuth } from '../../hooks/useAuth'

import styles from './aside.module.css'

export const Aside = () => {
    const { isAuthenticated, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (<aside className={styles.aside}>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <img src={logo} alt="Logo da Code Connect" />
                    </Link>
                </li>
                <li>
                    <Button href="/publish" outline>
                        Publicar
                    </Button>
                </li>
                <li>
                    <AsideLink href="/">
                        <IconFeed />
                        Feed
                    </AsideLink>
                </li>
                <li>
                    <AsideLink href="/profile">
                        <IconAccount />
                        Perfil
                    </AsideLink>
                </li>
                <li>
                    <AsideLink href="/about">
                        <IconInfo />
                        Sobre nós
                    </AsideLink>
                </li>
                <li>
                    {isAuthenticated ? (
                        <AsideLink href="#" onClick={handleLogout}>
                            <IconLogin />
                            Logout
                        </AsideLink>
                    ) : (
                        <AsideLink href="/auth/login">
                            <IconLogin />
                            Login
                        </AsideLink>
                    )}
                </li>
            </ul>
        </nav>
    </aside>)
}
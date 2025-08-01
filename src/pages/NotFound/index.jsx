import Typography from "../../components/Typography"
import styles from './notfound.module.css'

export const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 style={{ color: 'white', fontSize: '2rem' }}>
                Ops, estamos perdidos
            </h1>
        </div>
    )
} 
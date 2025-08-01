import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../../hooks/useAuth'
import { Spinner } from '../../components/Spinner'

export const Logout = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        // Executa o logout
        logout()
        
        // Redireciona para a página de login
        navigate('/auth/login', { replace: true })
    }, [logout, navigate])

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
        }}>
            <Spinner />
        </div>
    )
} 
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Spinner } from '../Spinner'

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/auth/login', { replace: true })
    }
  }, [isAuthenticated, isLoading, navigate])

  // Mostra spinner enquanto carrega o estado de autenticação
  if (isLoading) {
    return <Spinner />
  }

  // Se não estiver autenticado, não renderiza nada (será redirecionado pelo useEffect)
  if (!isAuthenticated) {
    return null
  }

  // Se estiver autenticado, renderiza os children
  return children
} 
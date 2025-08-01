import { Routes, Route } from "react-router"
import { Login } from '../pages/Login/index.jsx'
import { Register } from '../pages/Register/index.jsx'
import { Feed } from '../pages/Feed/index.jsx'
import { BlogPost } from '../pages/BlogPost/index.jsx'
import { Logout } from '../pages/Logout/index.jsx'
import { NotFound } from '../pages/NotFound/index.jsx'
import { ProtectedRoute } from '../components/ProtectedRoute/index.jsx'
import { AuthLayout } from '../layouts/Auth'
import { AppLayout } from '../layouts/App'

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rotas protegidas com AppLayout */}
            <Route path="/" element={
                <ProtectedRoute>
                    <AppLayout />
                </ProtectedRoute>
            }>
                <Route path="" element={<Feed />} />
                <Route path="blog-post/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* Rotas de autenticação com AuthLayout */}
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="logout" element={<Logout />} />
            </Route>
        </Routes>
    )
} 
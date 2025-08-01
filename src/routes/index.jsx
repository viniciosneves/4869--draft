import { Routes, Route } from "react-router"
import { Login } from '../pages/Login/index.jsx'
import { Register } from '../pages/Register/index.jsx'
import { Feed } from '../pages/Feed/index.jsx'
import { BlogPost } from '../pages/BlogPost/index.jsx'
import { Logout } from '../pages/Logout/index.jsx'
import { ProtectedRoute } from '../components/ProtectedRoute/index.jsx'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="" element={
                    <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute>
                } />
                <Route path="blog-post/:slug" element={
                    <ProtectedRoute>
                        <BlogPost />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="/auth">
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="logout" element={<Logout />} />
            </Route>
        </Routes>
    )
} 
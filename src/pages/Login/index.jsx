import { AuthFormContainer } from "../../components/AuthFormContainer"
import { Checkbox } from "../../components/Checkbox"
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"
import Typography from "../../components/Typography"
import { Button } from "../../components/Button"
import banner from './banner-login.png'
import { IconArrowFoward } from "../../components/icons/IconArrowFoward"
import { IconAssignement } from "../../components/icons/IconAssignement"
import { Form } from "../../components/Form"
import { Fieldset } from "../../components/Fieldset"
import { TextDivider } from "../../components/TextDivider"
import { Providers } from "../../components/Providers"
import { Link } from "../../components/Link"
import styles from './login.module.css'
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { useState } from "react"

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (formData) => {
        setError("")
        setIsLoading(true)

        const email = formData.get('email')
        const password = formData.get('password')

        const result = login(email, password)

        if (result.success) {
            // Redireciona para o feed após login bem-sucedido
            navigate('/', { replace: true })
        } else {
            setError(result.error)
        }
        
        setIsLoading(false)
    }

    return (
        <AuthFormContainer bannerSrc={banner}>
            <Typography variant="h1" color="--offwhite">Login</Typography>
            <Typography variant="h2" color="--offwhite">Boas-vindas! Faça seu login.</Typography>
            
            {error && (
                <Typography variant="body" style={{ marginBottom: '1rem', textAlign: 'center', color: '#ff6b6b' }}>
                    {error}
                </Typography>
            )}

            <Form action={handleLogin}>
                <Fieldset>
                    <Label>
                        E-mail
                    </Label>
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        required
                    />
                </Fieldset>
                <Fieldset>
                    <Label>
                        Senha
                    </Label>
                    <Input
                        name="password"
                        id="password"
                        type="password"
                        required
                    />
                    <Checkbox label="Lembrar-me" />
                </Fieldset>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Login"} <IconArrowFoward />
                </Button>
            </Form>
            <div>
                <TextDivider text="ou entre com outras contas" />
                <Providers />
            </div>
            <footer className={styles.footer}>
                <Typography variant="body" color="--offwhite">
                    Ainda não tem conta?
                </Typography>
                <Link href='/auth/register'>
                    <Typography variant="body" color="--highlight-green">
                        Crie seu cadastro!
                    </Typography>
                    <IconAssignement color="#81FE88" />
                </Link>
            </footer>
        </AuthFormContainer>
    )
}
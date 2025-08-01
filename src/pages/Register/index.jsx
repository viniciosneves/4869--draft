import { AuthFormContainer } from "../../components/AuthFormContainer"
import { Checkbox } from "../../components/Checkbox"
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"
import Typography from "../../components/Typography"
import { Button } from "../../components/Button"
import banner from './banner-register.png'
import { IconArrowFoward } from "../../components/icons/IconArrowFoward"
import { IconLogin } from "../../components/icons/IconLogin"
import { Form } from "../../components/Form"
import { Fieldset } from "../../components/Fieldset"
import { TextDivider } from "../../components/TextDivider"
import { Providers } from "../../components/Providers"
import { Link } from "../../components/Link"
import styles from './register.module.css'
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import { useState } from "react"

export const Register = () => {
    const { register } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleRegister = async (formData) => {
        setError("")
        setIsLoading(true)

        const name = formData.get('nome')
        const email = formData.get('email')
        const password = formData.get('password')

        const result = register(name, email, password)

        if (result.success) {
            navigate('/auth/login', { replace: true })
        } else {
            setError(result.error)
        }
        
        setIsLoading(false)
    }

    return (
        <AuthFormContainer bannerSrc={banner}>
            <Typography variant="h1" color="--offwhite">Cadastro</Typography>
            <Typography variant="h2" color="--offwhite">Olá! Preencha seus dados.</Typography>
            
            {error && (
                <Typography variant="body" style={{ marginBottom: '1rem', textAlign: 'center', color: '#ff6b6b' }}>
                    {error}
                </Typography>
            )}

            <Form action={handleRegister}>
                <Fieldset>
                    <Label>
                        Nome
                    </Label>
                    <Input
                        name="nome"
                        id="nome"
                        placeholder="Nome completo"
                        required
                    />
                </Fieldset>
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
                    <Checkbox label="Concordo com os termos de uso" required />
                </Fieldset>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Cadastrando..." : "Cadastrar"} <IconArrowFoward />
                </Button>
            </Form>
            <div>
                <TextDivider text="ou entre com outras contas" />
                <Providers />
            </div>
            <footer className={styles.footer}>
                <Typography variant="body" color="--offwhite">
                    Já tem conta?
                </Typography>
                <Link href='/auth/login'>
                    <Typography variant="body" color="--highlight-green">
                        Faça seu login!
                    </Typography>
                    <IconLogin color="#81FE88" />
                </Link>
            </footer>
        </AuthFormContainer>
    )
}
import { AuthInput, AuthPanel } from '../AuthPanel'

export const LoginPanel = () => (
    <AuthPanel
        title="Login"
        buttonTitle="Login"
    >
        <AuthInput placeholder="Email" />
        <AuthInput placeholder="Password" />
    </AuthPanel>
)
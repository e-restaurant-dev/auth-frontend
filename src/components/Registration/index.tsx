import { AuthInput, AuthPanel } from '../AuthPanel'

export const RegistrationPanel = () => {
    return (
        <AuthPanel
            title="Registration"
            buttonTitle="Registration"
        >
            <AuthInput placeholder="Email" />
            <AuthInput placeholder="Password" />
            <AuthInput placeholder="Confirm password" />
        </AuthPanel>
    )
}
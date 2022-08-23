import { LoginPanel } from './components/Login'
import { RegistrationPanel } from './components/Registration'
import { Paper, Button, Stack } from "@mui/material"
import { FunctionComponent, useContext } from 'react'
import { AuthStateContext, AuthStates } from './Context'

const panels: Record<AuthStates, FunctionComponent> = {
    [AuthStates.LOGIN]: RegistrationPanel,
    [AuthStates.REGISTRATION]: LoginPanel,
}

export const App: FunctionComponent = () => {
    const [state, setState] = useContext(AuthStateContext)

    const Panel = panels[state]

    const onChangePanel = () => {
        if (state === AuthStates.LOGIN) setState(AuthStates.REGISTRATION)
        else setState(AuthStates.LOGIN)
    }

    return (
        <Paper elevation={1} sx={{ maxWidth: 'md', py: '30px', m: '30px auto' }} >
            <Stack sx={{ m: '30px auto', maxWidth: '500px' }}>
                <Panel />
            </Stack>
            <Stack sx={{ m: '0 auto', maxWidth: '200px' }}>
                <Button onClick={onChangePanel} variant='contained' sx={{ m: 3 }}>{state}</Button>
            </Stack>
        </Paper>
    )
}

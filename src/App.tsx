import { FunctionComponent, useContext } from 'react'
import { Login } from './components/Login'
import { PanelProps } from './components/Panel'
import { AuthStateContext, AuthStates } from './Context'

const panels: Record<AuthStates, FunctionComponent<PanelProps>> = {
    [AuthStates.LOGIN]: ({ action }) => (
        <>
            <input placeholder="login" />
            <button onClick={action}>login</button>
        </>
    ),
    [AuthStates.REGISTRATION]: ({ action }) => (
        <>
            <input placeholder="registration" />
            <button onClick={action}>Registration</button>
        </>
    ),
}

export const App: FunctionComponent = () => {
    const [state, setState] = useContext(AuthStateContext)

    const Panel = panels[state]

    return (
        <div>
            <Panel action={() => {
                if (state === AuthStates.LOGIN) setState(AuthStates.REGISTRATION)
                else setState(AuthStates.LOGIN)
            }}></Panel>
        </div>

    )
}

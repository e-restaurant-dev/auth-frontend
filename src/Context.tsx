import { createContext, FunctionComponent, useContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react'
import { stub } from './utils/misc'

export enum AuthStates {
    LOGIN = 'login',
    REGISTRATION = 'registration'
}

export const AuthStateContext = createContext<
    [AuthStates, Dispatch<SetStateAction<AuthStates>>]
>([AuthStates.LOGIN, stub])

export const AuthStateProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const value = useState(AuthStates.LOGIN)

    return (
        <AuthStateContext.Provider value={value}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthState = () => useContext(AuthStateContext)

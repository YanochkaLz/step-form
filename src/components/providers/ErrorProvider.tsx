import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

interface IError {
    error: boolean,
    setError: Dispatch<SetStateAction<boolean>>
}

export const ErrorContext = createContext<IError>({
    error: true,
    setError: () => { }
})

export const useError = () => {
    return useContext(ErrorContext);
}

export const ErrorProvider: FC<PropsWithChildren> = ({ children }) => {
    const [error, setError] = useState<boolean>(true);

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}
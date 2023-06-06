import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

export interface GlobalState {
    language: string;
    // Add more properties to the global state as needed
}

export interface GlobalStateContextProps {
    globalState: GlobalState;
    setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

export interface GlobalStateProviderProps {
    children: ReactNode;
}

export const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const [globalState, setGlobalState] = useState<GlobalState>(() => {
        const storedState = localStorage.getItem('globalState');
        return storedState ? JSON.parse(storedState) : {
            language: 'English',
            // Add more properties to the global state as needed
        };
    });

    useEffect(() => {
        localStorage.setItem('globalState', JSON.stringify(globalState));
    }, [globalState]);

    const contextValue: GlobalStateContextProps = {
        globalState,
        setGlobalState,
    };

    return (
        <GlobalStateContext.Provider value={contextValue}>
            {children}
        </GlobalStateContext.Provider>
    );
};

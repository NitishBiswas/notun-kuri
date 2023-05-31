import { useContext } from 'react';
import { GlobalStateContext, GlobalStateContextProps } from '../store/store';

function useGetLanguage() {
    const context = useContext(GlobalStateContext);

    const { globalState } = context as GlobalStateContextProps;
    const { language } = globalState;

    return language;
}

export default useGetLanguage;

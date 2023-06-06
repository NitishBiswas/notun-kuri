import { useState, useEffect } from "react";

const useLocalStorageActiveNav = (initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [activeNav, setActiveNav] = useState<string>(() => {
        const storedValue = localStorage.getItem("activeNav");
        return storedValue ? storedValue : initialValue;
    });

    useEffect(() => {
        localStorage.setItem("activeNav", activeNav);
    }, [activeNav]);

    return [activeNav, setActiveNav];
};

export default useLocalStorageActiveNav;

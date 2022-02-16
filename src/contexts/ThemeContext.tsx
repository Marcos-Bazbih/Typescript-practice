import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext<any>(null);

const darkMode = {
    color: "wheat",
    background: "#282c34",
    isDark: true
};
const dayMode = {
    color: "#282c34",
    background: "wheat",
    isDark: false
};

const ThemeContextProvider = ({ children }: any) => {
    const [mode, setMode] = useState(dayMode);
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setMode(darkMode)
        }
        else{
            setMode(dayMode)
        }
    },[])
    const ToggleTheme = () => {
        mode === dayMode ? setMode(darkMode) : setMode(dayMode)
    };

    return (
        <ModeContext.Provider value={{ mode, ToggleTheme }}>
            {children}
        </ModeContext.Provider>
    )
}

export default ThemeContextProvider;
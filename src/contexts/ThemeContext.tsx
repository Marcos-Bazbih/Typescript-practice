import { createContext, useState } from "react";

export const ModeContext = createContext<any>("");

const darkMode = {
    color: "wheat",
    background: "#282c34"
};
const dayMode = {
    color: "#282c34",
    background: "wheat"
};

const ThemeContextProvider = ({ children }: any) => {
    const [mode, setMode] = useState(dayMode);
    const ToggleTheme = () => {
        mode === dayMode ? setMode(darkMode) : setMode(dayMode)
    };

    return (
        <ModeContext.Provider value={{ mode, setMode, ToggleTheme }}>
            {children}
        </ModeContext.Provider>
    )
}

export default ThemeContextProvider;
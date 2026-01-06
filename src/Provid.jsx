import { useEffect, useState } from "react";
import { Context } from "./Cont";


export function Provider({children}){
    const [theme, setTheme] = useState(() => localStorage.getItem
    ('theme') || ('darc'))

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])


    const toggleTheme = () => 
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    return (
        <Context.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </Context.Provider>
    )
}



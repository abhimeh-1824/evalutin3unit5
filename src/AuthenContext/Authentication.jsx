import {createContext,useState} from "react"

export const AuthContext = createContext()

export function AuthContextProvide({children}) {
    const [isAutenction, setAuthentication] = useState(false)
    function handelAuth(state)
    {
        setAuthentication(state)
    }
  return <AuthContext.Provider value={{isAutenction,handelAuth}}>{children}</AuthContext.Provider>
}

 

import {useContext} from "react";
import {Navigate} from "react-router-dom"
import {AuthContext} from "../AuthenContext/Authentication"

 export function ProtectedRoute({children}) {
     const {isAutenction} = useContext(AuthContext)
  
    if(!isAutenction)
    {
        return <Navigate to="/login"/>
    }
    return children
  
}



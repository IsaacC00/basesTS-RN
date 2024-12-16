import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

//? interfaces nos ayudan a tipar nuestra variables 
//? para tener claro como va a lucir mi obj o variable

//? esto => status: 'checking'|'authenticaded'|'not-authenticaded' es lo mismo que esto =>
//? pero con la excepcion de que tengo indices es decir
enum AuthStatus {
    'checking'= 'checking', //? => 0
    'authenticaded'='authenticaded', //? => 1
    'not-authenticaded'='not-authenticaded' //? => 2
};

interface AuthState {

    //Propiedades
    status: AuthStatus,
    token?:string,
    user?:User,
    isChecking?:boolean
    isAuthenticaded?:boolean,

    //Metodos
    loginUser: (email:string, name:string) => void,
    logoutUser: () => void
}

//? definir una interface a una propiedad y  despues de crear la interface es muy comun TS

interface User{
    name:string,
    email:string
}

//? estada inicial del context
//? la palabra reservada as sirve para indicar a ts
//? que toem el {} como AuthState
export const AuthContext = createContext({} as AuthState);

//? creamos y utilizamos el contexto
export const useAuthContext = () => useContext(AuthContext);

//? exportamo el componente para porveer contexto a nuestro app
//? tipamos nuestro authProvider y renderizamos los childrens
export const AuthProvider = ({ children }: PropsWithChildren) => {


    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    //? Simular  una peticion https para verificar mi AuthStatus
    useEffect(() => {
        setTimeout(() => {
            setStatus( AuthStatus["not-authenticaded"] );
        }, 1500);
    }, [])
    
    const loginUser = (email:string, name:string) => {
        setUser( { email, name } );
        setStatus(AuthStatus.authenticaded);
    }

    const logoutUser = () => {
        setUser(undefined);
        setStatus(AuthStatus["not-authenticaded"]);
    }

    return (
    <AuthContext.Provider value={{
        status:status,
        isChecking: status === AuthStatus.checking,
        isAuthenticaded: status === AuthStatus.authenticaded,
        user:user,
        loginUser,
        logoutUser

    }}>
        {children}
    </AuthContext.Provider>
    )
}



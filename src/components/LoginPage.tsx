import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

    const { isChecking, status, isAuthenticaded, user, loginUser, logoutUser } = useAuthContext();

    if (isChecking) {
        return (
            <h1 className="text-white">Autenticando...</h1>
        )
    }

    return (
        <>

            {isAuthenticaded ? (
                <>
                    <h1 className="text-white">Bienvenido</h1>
                    <h1 className="text-white font-bold">{ JSON.stringify(user?.name) }</h1>
                    <h1 className="text-white">con email</h1>
                    <h1 className="text-white">{JSON.stringify(user?.email)}</h1>
                    <button
                    onClick={ () => logoutUser() }
                     className="bg-blue-600 text-white p-2 mt-2 rounded-lg">Salir</button>

                </>
            ) : (
                <>
                    <h1 className="text-white">No Autenticado</h1>

                    <button 
                    onClick={ () => loginUser('isaac@correo.com','Isaac') }
                    className="bg-blue-600 text-white p-2 mt-2 rounded-lg">Ingresar</button>
                </>
            )}

            <h3 className="text-white">LoginPage</h3>
            <pre className="text-white">{status}</pre>
        </>
    )
}

// import { BasicFunctions } from './basicFunctions';
// import { ObjectLiterals } from './ObjectLiterals';
// import { BasicTypes } from './assets/BasicTypes';

// import { CounterApp } from "./components/CounterApp"
// import { LoginPage } from "./components/LoginPage"
import { FormPage } from "./components/FormPage"
// import { UserPage } from "./components/UserPage"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>

    {/* //? la clase h-svh me permite tomar en cuenta la barra de navegacion en IOS */}
      <div className='flex flex-col justify-center items-center h-svh bg-zinc-800'>

        <h1 className='text-3xl font-bold mb-4 text-white'>React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <CounterApp /> */}
        {/* <LoginPage /> */}
        {/* <UserPage/> */}
        <FormPage />
      </div>

    </AuthProvider>
  )
}

export default App

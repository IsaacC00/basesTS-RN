
export const BasicFunctions = () => {

    //? tipamos el retonor de la funcion asi
    const sumatoria = (a: number, b: number): string => {
        return `${a + b}`;
    }

    return (
        <>
            <h1>
                basicFunctions
            </h1>

            <p>
                podemos tipar una funcion para que sus parametros sean de un valor fijo
                ademas podemos tipar el tipo de valor que va retornar esa funcion
            </p>
            <pre>
                sumatoria de dos numeros
                <br />
                {sumatoria(2, 5)}
            </pre>
        </>
    )
}

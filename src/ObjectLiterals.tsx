
interface Persona {
    name: string,
    lastName: string
    age: number,
    addres: Adress
}

interface Adress {
    street: string
    secondStreet: string,
    houseNumb?: string
}

export const ObjectLiterals = () => {

    const estudiante: Persona = {
        name: 'Isaac',
        lastName: 'Calderon',
        age: 24,
        addres: {
            street: 'Av. Teodoro Gomez',
            secondStreet: 'Av. Atahualpa',

        }
    }

    return (
        <>
            <h1>Objetos literales e Interfaces</h1>
            <p>
                se acostumbra a declara interfaces cada que se va declara un objetos
                para saber como va a lucir, parecido a los contratos
            </p>
            <ul>
                <li>primero se declara una interfaces</li>
                <pre>
                    interface Persona
                    <br />
                    name:string,
                    <br />
                    lastNmae:string
                    <br />
                    age:number,
                    <br />
                </pre>
            </ul>
            <p>
                y despues se crea un objeto comun pero tipando con Persona
                <pre>
                    {JSON.stringify(estudiante)}
                </pre>
            </p>

            <h2>Incluso podemos tener interfaces dentro de intgefaces</h2>
            <h2>y tener propidedaes opciones como houseNumb?: string que no se aprecia en el ejemplo </h2>
        </>
    )
}

import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const  {count, increaseBy} = useCounter();

    return (
        <div className="flex flex-col text-white">
            <h1 className="text-2xl">
                CounterApp: <span> {count} </span>
            </h1>
            <button onClick={ () => increaseBy(1)} className="p-2 rounded-lg my-1 bg-orange-500 "> +1</button>
            <button onClick={ () => increaseBy(-1)} className="p-2 rounded-lg my-1 bg-orange-500 "> -1</button>
        </div>
    )
}

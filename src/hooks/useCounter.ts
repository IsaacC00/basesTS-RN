import { useState } from "react";

export const useCounter = () => {

    //? para tipar un hook de reat debemos de utilizar generico <>
    //? para decir que tipo de estado es el que vamos a manejar en este caso 

    const [count, setCount] = useState<number>(0);

    const increaseBy = (value : number ) => {
        // setCount( count + value );
        //? otra manera de hacer es de la siguieten manera
        // setCount( (current) => current + value );
        //? para que no llegue a numeros negativos
        setCount( Math.max( value + count, 0 ));
    }

  return {
    //?propiedades
    count,
    //? acciones
    increaseBy
  }
}

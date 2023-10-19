import { useState } from "react"

export function AddCategory({onNewCategory}) {


    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        //digo: voy cambiando el inputValue por lo que exista
        //en el input
        // console.log(inputValue);
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //Al darle enter al formulario, se deberia ver el inputValue 
        //en la consola, pero no se ve porque todo el formulario
        //se actualiza, para evitar eso se usa:
        event.preventDefault();
        //Se puede hacer de manera que la funcion
        //onAddCategories reciba un argumento
        // setCategories(inputValue);
        //Se suppne que categories es el argumento por defecto
        //de la funcion, entonces podemos utilizar nuevamente dicho
        //argumento

        if(inputValue.trim().length <= 1 ) return;

        

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    };


    return (
        <form onSubmit={event => onSubmit(event)}>

            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                // al cambiar el texto en el input se llama a la funcion
                // onInputChange mandandole el evento, dicho evento contiene
                //varias caracteristicas del input, entre ellos,
                //el valor de lo que se ha escrito en el input
                onChange={event => onInputChange(event)}
            />
        </form>


    )
}

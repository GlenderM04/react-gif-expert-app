import { useState } from "react";
import {AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {
    //Al darle un valor por defecto con formato de arreglo,
    //la variable categories sera un arreglo
    const [categories, setCategories] = useState(['Naruto']);

    //ESTO NO SE DEBE HACER. Poner un hoom dentro de un condicional
    // if (true) {
    //     const [categories, setCategories] = useState(['Naruto','Saint Seiya']);
    // }

    //OJO: el setCategories espera el mismo tipo de dato que el
    //categories por lo que el push() no funciona, ya que push()
    //no devuelve un arreglo, sino la nueva longitud del arreglo
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };


    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            {/* Aqui le voy a mandar a mi componente
            AddCategory la referencia a la funcion setCategories
            para que alla la pueda usar y por lo tanto pueda
            cambiar el valor de la variable categories */}
            <AddCategory
                onNewCategory={onAddCategory}
            />



            {/* Listado de Gifs */}
            {/* Se supone que cuando se de clic se va a cambiar
            el estado de las categorias, lo que hara que se vuelva
            a renderizar la pagina o los elementos que necesiten 
            ser renderizados */}
            {/* No se porque pero no debo llamar a la funcion con los
             parentesis () */}
            {/* <button onClick={onAddCategory}>
                Agregar
            </button> */}
            
                {/* el .map va a hacer que se vayan pasando por
            cada uno de los elementos del arreglo y la variable
            category tomaria cada uno de los valores del arreglo */}
                {
                    categories.map( category =>(
                        <GifGrid 
                        key = {category}
                        category={category}
                        />
                    )
                )
                }
            

            {/* Gif item */}

        </>
    );
};
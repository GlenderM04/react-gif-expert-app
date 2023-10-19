//Aqui, como este archivo se llama index, cuando alguien
// quiera utilizar algun componente de la carpeta components
// se va a ejecutar este codigo que va a hacer que, cada uno de los elementos exportados 
// esten disponibles para importar, lo que hace que solo tengas que llamar a este 
// directorio, o a la carpeta en si para poder tener disponibles estas exportaciones

//import AddCategory from "./components/index";
//o
//import AddCategory from "./components";

export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';


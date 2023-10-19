import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    //Voy a crear un nuevo hook personalizado
    const {images, isLoading} = useFetchGifs(category);
    //Hay que tener cuidado con los setFuncion,
    // osea las funciones que hacen cambiar el
    //  valor de un Hook useState por que si se llama
    //  esa funcion dentro de la misma funcion se crea
    //  un ciclo infinito


    //useEffect -> cuando algo cambie, quiero disparar un efecto
    //cuando el componente se renderice por primera vez
    // el [] indica que se va a ejecutar solo la primera vez

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }



    // useEffect(() => {
    //     getImages();

    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }


            {/* La palabra 'class' no se debe usar, es className*/}
            <div className="card-grid">

                {
                    images.map(
                        image => (
                            // <li key={image.id}>
                            //     {image.title}
                            //     {/* <br />
                            //     <img src={image.url}></img> */}

                            // </li>
                            <GifItem
                                key={image.id}
                                //Podria mandar una por una las propiedades
                                // title={image.title}
                                // url={image.url}
                                //Pero de esta manera mando TODAS las propiedades
                                {...image}

                            />
                        )
                    )
                }
            </div>
        </>
    )
}

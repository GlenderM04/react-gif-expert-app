export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ECPJs31axeAoFbiifBbx3NxSKzyaFNlq&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    
    //aqui el data tiene cada uno de los objetos que contiene 
    //toda la informacion del gif
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    // console.log(gifs);
    return gifs;
};
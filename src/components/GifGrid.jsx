import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';



export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs( category );

    // console.log( { images, isLoading });

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages)

    // };

    // useEffect( () => {
    //     getImages();
    // }, []);

    // Otra forma de llamar a la funcion asincrona
    // useEffect( () => {
    //     getGifs(category)
    //         .then( newImages => setImages(newImages) );
    // }, [ ]);



    return (
    <>
        <h3>{ category  }</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id } 
                        { ...image }
                    />
                ))

                // images.map( ( image ) => (
                //     <GifItem 
                //         key={ image.id } 
                //         title={ image.title }
                //         url={ image.url }
                //     />
                // ))
            }
        </div>
    </>
    )
}

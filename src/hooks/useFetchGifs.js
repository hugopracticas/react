import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getDataFetch = async (category) => {
        const results = await getGifs(category)
        setImages(results);
        setIsLoading(false);
    }

    useEffect(() => {
        getDataFetch(category)
    }, [])

    return {
        images,
        isLoading
    }
}
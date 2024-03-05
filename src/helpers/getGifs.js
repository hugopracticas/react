import { KEY, URL } from "../utils/constants.ts"

export const getGifs = async ( category ) => {
    const url = `${URL}${KEY}&q=${category}&limit=10`
    const resp = await fetch( url )
    const { data } = await resp.json()
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
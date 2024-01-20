import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

//use const client to fetch data from the sanity dashboard
export const client = createClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-04-11',
    useCdn: true,
    token: process.env.REACT_APP__SANITY_TOKEN,
}) 

const builder = imageUrlBuilder(client); //generate URLs for images stored in Sanity studio
export const urlFor = (source) => builder.image(source)
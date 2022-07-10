import sanityClient from '@sanity/client';
import imageURLBulider from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'phdidpof',
    dataset: 'production',
    apiVersion: '2022-05-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBulider(client);

export const urlFor = (source) => builder.image(source);
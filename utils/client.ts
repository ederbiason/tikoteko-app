import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'lwcyl4p7',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

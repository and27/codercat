import client from './contentful';

export async function getContentfulData(
  contentType: string,
) {
  const entries = await client.getEntries({
     content_type: contentType,
  });

  return entries.items;
}

export default getContentfulData;

import client from './contentful';

async function getContentfulData(
  contentType: string,
) {
  const entries = await client.getEntries({
     content_type: contentType,
  });

  return entries.items;
}

export async function getTipsbyDate(date: string) {
  const tips =  await client.getEntries({
    content_type :"tip",
      'fields.date': date
  })
  return tips.items[0];
}




export default getContentfulData;

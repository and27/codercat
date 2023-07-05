import { createClient } from "contentful";

const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  accessToken: "Ldro--vTT2T8289TNyLwHtKT2rv1fKLStlgQ5oPWsGA",
  space: process.env.CONTENTFUL_SPACE_ID,
  space: "dch0k07fhley",
});

export default client;

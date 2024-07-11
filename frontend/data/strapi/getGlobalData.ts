import { flattenAttributes } from '@/utils/utils';
import qs from 'qs';

const globalQuery = qs.stringify(
  {
    populate: '*',
  },
  { encode: false }
);

export async function getGlobalData(path: string) {
  const baseUrl = 'http://localhost:1337/api/';

  const url = new URL(`${baseUrl}${path}`);
  url.search = globalQuery;

  try {
    const response = await fetch(url.href, { cache: 'no-store' });
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}

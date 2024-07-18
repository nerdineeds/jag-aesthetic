import { flattenAttributes } from '@/utils/utils';
import qs from 'qs';

const globalQuery = qs.stringify(
  {
    populate: '*',
  },
  { encode: false }
);

export async function getGlobalData(path: string) {
  const baseUrl =
    'https://cheerful-comfort-a701209ba5.strapiapp.com/api/';

  const url = new URL(`${baseUrl}${path}`);
  url.search = globalQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}

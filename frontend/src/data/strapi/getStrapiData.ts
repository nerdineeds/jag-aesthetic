import { flattenAttributes } from '@/utils/utils';
import qs from 'qs';

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        logos: {
          fields: ['url', 'alternativeText'],
        },
        backgroundImage: {
          fields: ['url', 'alternativeText'],
        },
        link: {
          populate: {
            link: {
              populate: true,
            },
          },
        },
        image: {
          fields: ['url', 'alternativeText'],
        },
        services: { populate: true },
        packages: {
          fields: [
            'name',
            'description',
            'learnMore',
            'timeline',
            'price',
          ],
        },
        testimonials: {
          fields: ['author', 'company', 'testimonial'],
          populate: {
            authorAvatar: {
              fields: ['url', 'alternativeText'],
            },
          },
        },
        facts_and_questions: {
          fields: ['question', 'answer'],
        },
      },
    },
  },
});

export async function getStrapiData(path: string) {
  const baseUrl =
    'https://cheerful-comfort-a701209ba5.strapiapp.com/api/';

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}

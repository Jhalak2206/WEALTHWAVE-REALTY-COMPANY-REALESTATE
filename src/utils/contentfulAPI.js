// File: src/utils/contentfulAPI.js (The clean, final version)
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Fetch a single blog post by slug
 */
export const getEntryBySlug = async (slug) => {
  try {
    // Both content_type and getEntries are now clean and use the correct ID
    const entries = await client.getEntries({
      content_type: 'BlogSinglePost.js', // <-- FINAL CONFIRMED ID
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0].fields;
    } else {
      console.warn(`No entry found for slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error('Contentful fetch failed:', error);
    return null;
  }
};

/**
 * Fetch all blog slugs
 */
export const getAllBlogSlugs = async () => {
  try {
    // Both content_type and getEntries are now clean and use the correct ID
    const entries = await client.getEntries({
      content_type: 'BlogSinglePost.js', // <-- FINAL CONFIRMED ID
      select: 'fields.slug',
    });
    return entries.items.map(item => item.fields.slug);
  } catch (error) {
    console.error('Failed to fetch all slugs:', error);
    return [];
  }
};
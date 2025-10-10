// contentfulClient.js

import * as contentful from 'contentful';

// 1. Define a variable to control the mode (true for Preview, false for Delivery)
// In a real app, this might be controlled by a special URL parameter or environment variable.
// For testing, we'll use a new environment variable (e.g., REACT_APP_PREVIEW_MODE=true)
const IS_PREVIEW_MODE = process.env.REACT_APP_PREVIEW_MODE === 'true';

// NOTE: Use environment variables for security!
export const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    
    // 2. Select the correct Access Token based on the mode
    accessToken: IS_PREVIEW_MODE
        ? process.env.REACT_APP_CONTENTFUL_PREVIEW_ACCESS_TOKEN // Use CPA token
        : process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,        // Use CDA token
    
    // 3. Select the correct Host based on the mode
    host: IS_PREVIEW_MODE
        ? 'preview.contentful.com' // Use CPA host
        : 'cdn.contentful.com',    // Use CDA host
});

/**
 * Fetches a single blog post entry based on its slug.
 * @param {string} slug - The slug from the URL.
 * @returns {Promise<Object>} The Contentful entry object or null.
 */
export async function getEntryBySlug(slug) {
    try {
        const response = await client.getEntries({
            content_type: 'blog_post',
            'fields.slug': slug,
            limit: 1
        });

        return response.items[0];
    } catch (error) {
        console.error('Error fetching blog post from Contentful:', error);
        throw error;
    }
}
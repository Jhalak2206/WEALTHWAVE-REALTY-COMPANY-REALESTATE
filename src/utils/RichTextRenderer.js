// src/utils/RichTextRenderer.js

import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

// Define custom rendering options for Rich Text nodes
const options = {
  // Define how specific blocks (paragraphs, headers, lists) should be rendered
  renderNode: {
    // 1. Basic Paragraph
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="rich-text-paragraph">{children}</p>,
    
    // 2. Embedded Assets (Images)
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const asset = node.data.target.fields;
      
      // Check if the asset and its file data exist
      if (asset && asset.file) {
        const imageUrl = asset.file.url; 
        const description = asset.description || asset.title || 'Embedded image';
        
        // Contentful's CDN URL often starts without 'https:', so we ensure it's absolute
        const absoluteUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl;
        
        return (
          <figure className="rich-text-figure">
            <img 
              src={absoluteUrl} 
              alt={description} 
              className="rich-text-image" 
              loading="lazy"
            />
            {description && <figcaption className="rich-text-caption">{description}</figcaption>}
          </figure>
        );
      }
      return null;
    },
    
    // 3. Embedded Entries (If you link to other content within the post)
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // You would implement custom logic here to render a card or component
      // for a linked content type (e.g., an author bio, or related property card)
      return <div className="embedded-entry-placeholder">Embedded content placeholder.</div>;
    },

    // 4. List Items
    [BLOCKS.UL_LIST]: (node, children) => <ul className="rich-text-ul">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="rich-text-ol">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="rich-text-li">{children}</li>,
  },
  
  // Define how inline elements (like hyperlinks) should be rendered
  renderText: text => text.replace(' ', '\u00a0'), // Prevents orphans on long titles
  
  renderMark: {},

  renderInline: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a 
        href={node.data.uri} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="rich-text-link"
      >
        {children}
      </a>
    ),
  },
};

/**
 * Component to render Contentful Rich Text field content.
 * @param {Object} content - The JSON object from the Contentful Rich Text field.
 */
const RichTextRenderer = ({ content }) => {
  if (!content) return null;
  
  // documentToReactComponents converts the JSON document into React elements
  return (
    <div className="rich-text-container">
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default RichTextRenderer;
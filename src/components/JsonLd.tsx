import React from 'react';
import type { SchemaGraph } from '@/lib/schema';

/**
 * Renders a JSON-LD block.
 *
 * `<` is escaped to `<` so any string inside the data (product names, FAQ
 * answers, WordPress descriptions) can never terminate the script tag or open a
 * new element. Schema.txt section 3.3 additionally asks that these text values
 * avoid straight double quotes; escaping means we are safe either way, and
 * JSON.stringify already handles the quoting.
 */
export const JsonLd: React.FC<{ data: SchemaGraph }> = ({ data }) => {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
};

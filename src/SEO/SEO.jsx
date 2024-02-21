// components/SEO.js

import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, url, image }) => {
  return (
    <Helmet>
      {/* SEO meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
  

      {/* Twitter meta tags */}
      <meta name="twitter:card" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

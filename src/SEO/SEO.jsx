import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, image }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`https://www.testing.harshadkajale.online/${image}`} />
      <meta property="og:url" content={`https://www.testing.harshadkajale.online${window.location.pathname+window.location.search}`} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Shreeji Graphic's" />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;

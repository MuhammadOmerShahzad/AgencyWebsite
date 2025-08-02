import React from 'react';
import { Helmet } from 'react-helmet-async';

const Sitemap: React.FC = () => {



  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    </Helmet>
  );
};

export default Sitemap; 
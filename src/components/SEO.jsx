import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Iglesia Bíblica Reflejo',
  description = 'Comunidad cristiana enfocada en reflejar a Jesús. Servicios dominicales, ministerios y discipulado para toda la familia.',
  image = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  url = '',
  type = 'website'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default SEO;

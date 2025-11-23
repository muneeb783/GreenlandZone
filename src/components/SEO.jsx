import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({
  title = 'Greenland Zone - Dairy Farming Solutions',
  description = 'Leading provider of advanced dairy farming equipment, mechanization solutions, feed additives, and cow health monitoring systems.',
  keywords = 'dairy farming, milk production, cow monitoring, feed additives, dairy equipment, milking solutions, forage solutions',
  image = '/og-image.jpg',
  url = 'https://greenlandzone.com',
  type = 'website'
}) => {
  const fullTitle = title.includes('Greenland Zone') ? title : `${title} | Greenland Zone`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Greenland Zone" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Greenland Zone" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export { HelmetProvider, SEO };

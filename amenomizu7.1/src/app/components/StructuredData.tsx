import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.amenomizu.jp',
    name: 'あめのみづ鍼灸院',
    image: 'https://www.amenomizu.jp/image/exterior.jpg',
    url: 'https://www.amenomizu.jp',
    telephone: '+81-50-3637-7265',
    priceRange: '¥10,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '相模ヶ丘2-29-2 グレイスメゾン城所703',
      addressLocality: '座間市',
      addressRegion: '神奈川県',
      postalCode: '252-0001',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.51357673916645,
      longitude: 139.41882997524283,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '19:00',
        closes: '20:30',
      },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
    paymentAccepted: 'Cash',
    description:
      '神奈川県座間市の鍼灸院。小田急相模原駅から徒歩3分。ひとりひとりに最適な治療をご提供します。',
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

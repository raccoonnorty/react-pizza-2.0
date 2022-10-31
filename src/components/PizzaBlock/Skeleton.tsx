import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="138" cy="138" r="138" />
    <rect x="0" y="286" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="324" rx="10" ry="10" width="280" height="66" />
    <rect x="196" y="369" rx="0" ry="0" width="1" height="7" />
    <rect x="0" y="412" rx="8" ry="8" width="80" height="25" />
    <rect x="126" y="405" rx="20" ry="20" width="152" height="42" />
  </ContentLoader>
);

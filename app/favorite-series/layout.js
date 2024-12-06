// app/favorite-series/layout.js
import React from 'react';

export default function FavoriteSeriesLayout({ children }) {
  return (
    <div className="favorite-series-layout">
      <h2>Ulubiony serial</h2>
      <section>{children}</section>
    </div>
  );
}

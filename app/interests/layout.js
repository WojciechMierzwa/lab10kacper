// app/interests/layout.js
import React from 'react';

export default function InterestsLayout({ children }) {
  return (
    <div className="interests-layout">
      <h2>Moje zainteresowania</h2>
      <section>{children}</section>
    </div>
  );
}

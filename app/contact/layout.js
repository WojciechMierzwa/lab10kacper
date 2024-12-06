// app/contact/layout.js
import React from 'react';

export default function ContactLayout({ children }) {
  return (
    <div className="contact-layout">
      <h2>Kontakt</h2>
      <section>{children}</section>
    </div>
  );
}

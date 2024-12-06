'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Witaj na mojej stronie!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">O mnie</Link>
          </li>
          <li>
            <Link href="/interests">Moje zainteresowania</Link>
          </li>
          <li>
            <Link href="/favorite-series">Ulubiony serial</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

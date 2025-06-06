import Link from 'next/link';

export default function Nav() {
  return (
  <nav className="p-4 border-b border-gray-300">
  <Link href="/">Home</Link> | <Link href="/about">Over</Link>
  </nav>
  );
}
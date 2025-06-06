import Link from 'next/link';

export default function Nav() {
  return (
   <nav className="p-4 border-b border-gray-300">
  <Link href="/">Dashboard</Link> | <Link href="/about">Info</Link>
</nav>
  );
}
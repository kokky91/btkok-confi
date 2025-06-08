'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Over ons' },
  { href: '/wat-wij-doen', label: 'Wat wij doen' },
  { href: '/projecten', label: 'Projecten' },
  { href: '/contact', label: 'Contact' },
  { href: '/configurator', label: 'Configurator' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Branding */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white">
            BTKOK
          </div>

          {/* Desktop Nav */}
          <div className="hidden space-x-6 md:flex">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'text-sm font-medium transition duration-200',
                  pathname === href
                    ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-label={menuOpen ? 'Sluit menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow md:hidden dark:bg-gray-900">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'block rounded-md px-4 py-2 text-base font-medium transition',
                pathname === href
                  ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4'
                  : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}


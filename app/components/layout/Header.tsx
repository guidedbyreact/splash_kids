'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  const menuCategories = {
    'Jeux de Plage': {
      href: '/categories/plage',
      subCategories: [
        {
          name: 'Par Type',
          items: [
            { name: 'Ballons de plage', href: '/categories/plage/ballons' },
            { name: 'Jeux de sable', href: '/categories/plage/sable' },
            { name: 'Frisbees', href: '/categories/plage/frisbees' },
            { name: 'Raquettes', href: '/categories/plage/raquettes' }
          ]
        },
        {
          name: 'Par Âge',
          items: [
            { name: '2-4 ans', href: '/categories/plage/2-4-ans' },
            { name: '5-7 ans', href: '/categories/plage/5-7-ans' },
            { name: '8-12 ans', href: '/categories/plage/8-12-ans' }
          ]
        }
      ]
    },
    'Jeux de Piscine': {
      href: '/categories/piscine',
      subCategories: [
        {
          name: 'Par Type',
          items: [
            { name: 'Bouées', href: '/categories/piscine/bouees' },
            { name: 'Jeux gonflables', href: '/categories/piscine/gonflables' },
            { name: 'Plongée', href: '/categories/piscine/plongee' },
            { name: 'Jeux d\'eau', href: '/categories/piscine/jeux-eau' }
          ]
        },
        {
          name: 'Collections',
          items: [
            { name: 'Animaux', href: '/categories/piscine/animaux' },
            { name: 'Super-héros', href: '/categories/piscine/super-heros' },
            { name: 'Sports', href: '/categories/piscine/sports' }
          ]
        }
      ]
    }
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-blue-500 text-white text-center py-2 text-sm">
        Livraison gratuite à partir de 50€ d'achat !
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">SPLASH KIDS</span>
          </Link>

          {/* Main Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {Object.entries(menuCategories).map(([category, { href, subCategories }]) => (
              <div key={category} className="group relative">
                <Link 
                  href={href}
                  className={`text-gray-800 font-semibold hover:text-blue-500 transition-colors py-8 px-4 flex items-center ${
                    pathname.startsWith(href) ? 'text-blue-500' : ''
                  }`}
                >
                  {category}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                <div className="hidden group-hover:block absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-lg">
                  {subCategories.map((section) => (
                    <div key={section.name} className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                        {section.name}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={`text-gray-600 hover:text-blue-500 transition-colors block py-1 ${
                                pathname === item.href ? 'text-blue-500' : ''
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Link 
              href="/nouveautes"
              className={`text-gray-800 font-semibold hover:text-blue-500 transition-colors py-8 px-4 ${
                pathname === '/nouveautes' ? 'text-blue-500' : ''
              }`}
            >
              Nouveautés
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/search" className="text-gray-600 hover:text-blue-500">
              <span className="sr-only">Rechercher</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </Link>
            <Link href="/compte" className="text-gray-600 hover:text-blue-500">
              <span className="sr-only">Mon compte</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>
            <Link href="/panier" className="text-gray-600 hover:text-blue-500 relative">
              <span className="sr-only">Panier</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 
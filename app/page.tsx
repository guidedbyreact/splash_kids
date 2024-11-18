import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
            alt="Enfants jouant à la plage"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl p-8 rounded-lg">
            <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">
              <span className="text-blue-400">L'été</span> est fait pour{' '}
              <span className="text-blue-400">s'amuser !</span>
            </h1>
            <p className="text-2xl mb-8 text-white drop-shadow-md">
              Découvrez notre collection de jeux aquatiques pour des moments inoubliables
            </p>
            <Link
              href="/categories/nouveautes"
              className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Voir les nouveautés
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        {/* ... code des catégories ... */}
      </section>

      {/* Detailed Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Jeux de Plage */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Jeux de Plage</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/categories/plage/ballons" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Ballons de plage
                  </Link>
                </li>
                <li>
                  <Link href="/categories/plage/sable" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Jeux de sable
                  </Link>
                </li>
                <li>
                  <Link href="/categories/plage/frisbees" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Frisbees
                  </Link>
                </li>
                <li>
                  <Link href="/categories/plage/raquettes" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Raquettes
                  </Link>
                </li>
              </ul>
              <Link 
                href="/categories/plage"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
              >
                Voir tout →
              </Link>
            </div>

            {/* Jeux de Piscine */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Jeux de Piscine</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/categories/piscine/bouees" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Bouées
                  </Link>
                </li>
                <li>
                  <Link href="/categories/piscine/gonflables" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Jeux gonflables
                  </Link>
                </li>
                <li>
                  <Link href="/categories/piscine/plongee" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Plongée
                  </Link>
                </li>
                <li>
                  <Link href="/categories/piscine/jeux-eau" className="text-gray-600 hover:text-blue-500 flex items-center">
                    <span className="mr-2">→</span>
                    Jeux d'eau
                  </Link>
                </li>
              </ul>
              <Link 
                href="/categories/piscine"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
              >
                Voir tout →
              </Link>
            </div>

            {/* Nouveautés */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Nouveautés</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src="/images/beach-ball.jpg"
                      alt="Nouveau produit"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Super Ballon XL</h4>
                    <p className="text-blue-600">19.99€</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src="/images/pool-float.jpg"
                      alt="Nouveau produit"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Bouée Licorne LED</h4>
                    <p className="text-blue-600">29.99€</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/nouveautes"
                className="mt-4 inline-block text-blue-500 hover:text-blue-600 font-semibold"
              >
                Voir tout →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
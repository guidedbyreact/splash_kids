import Image from 'next/image';
import Link from 'next/link';

// Cette fonction simule la récupération des données du produit
async function getProduct(id: string) {
  // Simuler un appel API
  return {
    id,
    name: 'Ballon de plage multicolore',
    price: 12.99,
    description: 'Un magnifique ballon de plage aux couleurs vives, parfait pour les jeux en famille.',
    images: ['/images/beach-ball.jpg', '/images/beach-ball-2.jpg'],
    category: 'Jeux de Plage',
    features: [
      'Matériau résistant à l\'eau',
      'Couleurs vives et attrayantes',
      'Facile à gonfler',
      'Taille idéale pour les enfants'
    ],
    specifications: {
      age: '3+ ans',
      dimensions: '40cm de diamètre',
      material: 'PVC de haute qualité',
      weight: '200g'
    }
  };
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images du produit */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${product.name} vue ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informations produit */}
        <div className="space-y-6">
          <div>
            <Link 
              href={`/categories/${product.category.toLowerCase()}`}
              className="text-blue-500 hover:underline"
            >
              {product.category}
            </Link>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <p className="text-2xl font-bold text-blue-600 mt-4">{product.price}€</p>
          </div>

          <div>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Caractéristiques</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Spécifications</h2>
            <dl className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-gray-500 capitalize">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
} 
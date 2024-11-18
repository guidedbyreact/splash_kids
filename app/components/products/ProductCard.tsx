import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/produits/${id}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-500 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-lg font-bold text-blue-600">{price.toFixed(2)}€</p>
      </Link>
    </div>
  );
} 
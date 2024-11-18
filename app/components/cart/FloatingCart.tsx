'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface FloatingCartProps {
  isVisible: boolean;
  onClose: () => void;
  product?: {
    name: string;
    image: string;
    price: number;
  };
}

export default function FloatingCart({ isVisible, onClose, product }: FloatingCartProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-green-600">Produit ajouté au panier !</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>
          
          {product && (
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-blue-600">{product.price}€</p>
              </div>
            </div>
          )}
          
          <div className="flex gap-2">
            <Link
              href="/cart"
              className="flex-1 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Voir le panier
            </Link>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-50 transition-colors"
            >
              Continuer les achats
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
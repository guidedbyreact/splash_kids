import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchProducts = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      // Simuler une recherche API
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Plus de résultats de test
      const mockResults: Product[] = [
        {
          id: '1',
          name: 'Ballon de plage multicolore',
          category: 'Jeux de Plage',
          price: 12.99,
          image: '/images/beach-ball.jpg'
        },
        {
          id: '2',
          name: 'Bouée Licorne',
          category: 'Jeux de Piscine',
          price: 24.99,
          image: '/images/pool-float.jpg'
        },
        {
          id: '3',
          name: 'Set de pelles et seaux',
          category: 'Jeux de Plage',
          price: 15.99,
          image: '/images/beach-toys.jpg'
        },
        {
          id: '4',
          name: 'Pistolet à eau super soaker',
          category: 'Jeux de Piscine',
          price: 19.99,
          image: '/images/water-gun.jpg'
        }
      ].filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );

      setResults(mockResults);
      setIsLoading(false);
    };

    const debounce = setTimeout(searchProducts, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  return { query, setQuery, results, isLoading };
} 
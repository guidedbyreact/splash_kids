import { useState, useEffect } from 'react';
import { useUser } from "@clerk/nextjs";

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
}

export function useCart() {
  const { isSignedIn, user } = useUser();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      if (isSignedIn && user) {
        try {
          const response = await fetch(`/api/cart`);
          const data = await response.json();
          setItems(data.items);
        } catch (error) {
          console.error('Erreur lors du chargement du panier:', error);
        }
      }
      setIsLoading(false);
    }

    loadCart();
  }, [isSignedIn, user]);

  // Ajouter un produit au panier
  const addItem = async (productId: string, quantity: number = 1) => {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier:', error);
    }
  };

  // Mettre à jour la quantité
  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      const response = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du panier:', error);
    }
  };

  // Supprimer un produit
  const removeItem = async (productId: string) => {
    try {
      const response = await fetch('/api/cart/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      setItems(data.items);
    } catch (error) {
      console.error('Erreur lors de la suppression du panier:', error);
    }
  };

  return {
    items,
    isLoading,
    addItem,
    updateQuantity,
    removeItem,
  };
} 
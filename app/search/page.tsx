export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Rechercher</h1>
      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full p-4 border rounded-lg"
        />
      </div>
    </div>
  );
} 
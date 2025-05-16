import Link from "next/link";

const LIST_PRODUCTS = [
  { id: 1, name: "Produto 1", price: 100 },
  { id: 2, name: "Produto 2", price: 200 },
  { id: 3, name: "Produto 3", price: 300 },
];

export default function ProductsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lista de produtos</h1>
      <div className="flex flex-col gap-4 p-4">
        {LIST_PRODUCTS.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="hover:text-blue-500"
          >
            {product.name} - R${product.price}
          </Link>
        ))}
      </div>
    </div>
  );
}

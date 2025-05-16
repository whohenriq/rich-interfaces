import Link from "next/link";

export function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">Lista de tarefas</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function LayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold">Lista de produtos</h1>
      {children}
    </section>
  );
}

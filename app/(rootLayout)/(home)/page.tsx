import Products from "./_components/Products";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products`
  );
  const data = await response.json();
  return data.products;
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <h1 className="mb-4 text-xl">Products</h1>
      <Products data={data} />
    </div>
  );
}

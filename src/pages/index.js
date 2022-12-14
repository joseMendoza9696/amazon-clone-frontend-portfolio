import Head from "next/head";
import Header from "../components/Headers";
import Banner from "../components/Banner";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100" >
      <Head>
        <title>Amazon 2.0</title>
      </Head> 
      {/* HEADER COMPONENT */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}
        <Banner />

        {/* PRODUCT FEED */}
        <ProductsFeed products={products} />

      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://amazon-clone-backend-portfolio-production.up.railway.app/products').then(
    (res) => res.json()
  );

  return { props: {
    products
  }}
}


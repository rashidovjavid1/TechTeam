import HeroSwiper from "@/components/HeroSwiper";
import ProductCard from "@/components/ProductCard";
import { ProductList } from "./constants/Products";

export default function Page() {
  return (
    <main>
      <section className="heroSection">
        <div className="container">
          <HeroSwiper />
        </div>
      </section>

      <section className="productsSection">
        <div className="container">
          <div className="sectionTitle">
            <h2>Populyar Məhsullar</h2>
            <p>Minlərlə məhsulu müqayisə et, ən uyğun qiyməti tap.</p>
          </div>

          <ul className="productsGrid">
            {ProductList.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="discountedProductSection">
        <div className="container">
          <h2>Endirimli Məhsullar</h2>
          <p>Minlərlə məhsulu müqayisə et, ən uyğun qiyməti tap.</p>
          <ul className="productsGrid">
            {ProductList.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

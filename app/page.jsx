import HeroSwiper from "@/components/HeroSwiper";
import ProductCard from "@/components/ProductCard";
import { ProductList } from "./constants/Products";

export default function Page() {
  return (
    <main>
      <section className="heroSection">
        <div className="container">
          <div className="heroMain">
            <HeroSwiper />
          </div>
        </div>
      </section>

      <section className="productsSection">
        <div className="container">
          <div className="sectionTop">
            <h2>Populyar Məhsullar</h2>
            <p>Minlərlə məhsulu müqayisə et, ən uyğun qiyməti tap.</p>
          </div>

          <div className="productsGrid">
            {ProductList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

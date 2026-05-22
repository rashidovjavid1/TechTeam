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
          <h2>Populyar Məhsullar</h2>
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
      <section className="forYouProductSection">
        <div className="container">
          <h2>Sene Uygun Məhsullar</h2>
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
      <section className="discountedPopularProductSection">
        <div className="container">
          <h2>Endirimli Populyar Məhsullar</h2>
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
      <section className="holidayProductSection">
        <div className="container">
          <h2>Qurban Bayramina Ozel Məhsullar</h2>
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
      <section className="discountedMeatMachineProductSection">
        <div className="container">
          <h2>En Ucuz Et ceken Məhsullar</h2>
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

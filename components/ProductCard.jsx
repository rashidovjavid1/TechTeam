export default function ProductCard({ product = {} }) {
  const { name, store, price, oldPrice, discount, saving, priceCount, image } =
    product;

  return (
    <div className="productCard">
      <div className="cardImage">
        <img src={image} alt={name} />
        <span className="discountBadge">
          {"\u2193"}
          {discount}
        </span>
        <button className="bellBtn">🔔</button>
      </div>

      <div className="cardBody">
        <p className="productName">{name}</p>
        <span className="storeName">{store}</span>
        <div className="priceRow">
          <span className="currentPrice">{price}</span>
          <span className="priceArrow">›</span>
        </div>
        <span className="oldPrice">{oldPrice}</span>
        <div className="savingBox">
          <span>Son 30 günün en ucuzu</span>
          <strong>Qazancın {saving}</strong>
        </div>
      </div>

      <button className="compareBtn">{priceCount} qiymeti incele</button>
    </div>
  );
}

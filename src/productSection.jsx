
import ProductCard from "./productCard";


const ProductSection = () => (
  <div className="container mt-5">
    <div className="row">
      <ProductCard
        imageSrc="https://picsum.photos/400/300"
        title="Product 1"
        description="Description of Product 1."
      />
      <ProductCard
        imageSrc="https://picsum.photos/400/301"
        title="Product 2"
        description="Description of Product 2."
      />
      <ProductCard
        imageSrc="https://picsum.photos/400/299"
        title="Product 3"
        description="Description of Product 3."
      />
    </div>
  </div>
);

export default ProductSection;

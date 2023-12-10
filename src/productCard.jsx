

const ProductCard = ({ imageSrc, title, description }) => (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="cta-btn text-decoration-none">Buy Now</a>
        </div>
      </div>
    </div>
  );

  export default ProductCard;
export function ProductCards() {
  const products = [
    {
      id: 1,
      name: "Women's Summer Dress",
      price: "₹1,299",
      rating: "⭐ 4.8",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
    },
    {
      id: 2,
      name: "Men's Casual Jacket",
      price: "₹1,999",
      rating: "⭐ 4.7",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    },
    {
      id: 3,
      name: "Classic Handbag",
      price: "₹1,499",
      rating: "⭐ 4.9",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    },
    {
      id: 4,
      name: "Stylish Sneakers",
      price: "₹2,299",
      rating: "⭐ 4.6",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Trending Products</h2>

      <div style={styles.container}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <div style={styles.content}>
              <h3 style={styles.name}>{product.name}</h3>

              <div style={styles.details}>
                <span style={styles.price}>{product.price}</span>
                <span>{product.rating}</span>
              </div>

              <div style={styles.buttons}>
                <button style={styles.cartBtn}>
                  Add to Cart
                </button>

                <button style={styles.buyBtn}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 8%",
    backgroundColor: "#fafafa",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "50px",
    color: "#222",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
  },

  content: {
    padding: "20px",
  },

  name: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#222",
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#555",
  },

  price: {
    fontWeight: "bold",
    color: "#ff3f6c",
    fontSize: "18px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
  },

  cartBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },

  buyBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    backgroundColor: "#ff3f6c",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProductCards;
export function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <p style={styles.tagline}>✨ New Fashion Collection 2026</p>

        <h1 style={styles.title}>
          Elevate Your <br />
          Everyday Style
        </h1>

        <p style={styles.description}>
          Discover premium fashion that blends comfort, elegance,
          and the latest trends. Shop the season's most loved looks.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Shop Now</button>
          <button style={styles.secondaryBtn}>Explore Collection</button>
        </div>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800"
          alt="Fashion Model"
          style={styles.image}
        />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "90vh",
    padding: "0 8%",
    background:
      "linear-gradient(to right, #fff7f9, #ffe4ec)",
  },

  content: {
    maxWidth: "550px",
  },

  tagline: {
    color: "#ff3f6c",
    fontWeight: "600",
    marginBottom: "15px",
    fontSize: "18px",
  },

  title: {
    fontSize: "4.5rem",
    lineHeight: "1.1",
    color: "#222",
    marginBottom: "20px",
  },

  description: {
    fontSize: "18px",
    color: "#666",
    lineHeight: "1.8",
    marginBottom: "35px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
  },

  primaryBtn: {
    padding: "14px 30px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ff3f6c",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "14px 30px",
    border: "2px solid #ff3f6c",
    borderRadius: "8px",
    backgroundColor: "transparent",
    color: "#ff3f6c",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
  },

  imageContainer: {
    width: "500px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
};

export default Hero;
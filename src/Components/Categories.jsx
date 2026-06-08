export function Categories() {
  const categories = [
    {
      id: 1,
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    },
    {
      id: 2,
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    },
    {
      id: 3,
      name: "Kids",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    },
    {
      id: 4,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Shop By Category</h2>
        <p style={styles.subtitle}>
          Discover fashion tailored for every style and occasion.
        </p>
      </div>

      <div style={styles.container}>
        {categories.map((category) => (
          <div key={category.id} style={styles.card}>
            <img
              src={category.image}
              alt={category.name}
              style={styles.image}
            />

            <div style={styles.overlay}>
              <h3 style={styles.categoryName}>
                {category.name}
              </h3>

              <button style={styles.button}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 8%",
    backgroundColor: "#fff",
  },

  header: {
    textAlign: "center",
    marginBottom: "50px",
  },

  title: {
    fontSize: "2.8rem",
    color: "#222",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#666",
    fontSize: "1.1rem",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },

  card: {
    position: "relative",
    height: "420px",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "30px",
  },

  categoryName: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: "15px",
  },

  button: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ff3f6c",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Categories;
export function Home() {
  return (
    <section style={styles.home}>
      <h2 style={styles.heading}>Why Shop With Us?</h2>

      <div style={styles.container}>
        <div style={styles.card}>
          <h3>🚚 Fast Delivery</h3>
          <p>Get your favorite fashion products delivered quickly.</p>
        </div>

        <div style={styles.card}>
          <h3>💎 Premium Quality</h3>
          <p>Carefully curated collections made from quality materials.</p>
        </div>

        <div style={styles.card}>
          <h3>💖 Latest Trends</h3>
          <p>Stay ahead with the newest fashion styles and designs.</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  home: {
    padding: "80px 8%",
    background: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "50px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    width: "300px",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Home;
export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Brand Section */}
        <div style={styles.section}>
          <h2 style={styles.logo}>LuxeWear</h2>

          <p style={styles.description}>
            Discover the latest fashion trends and premium collections.
            Elevate your style with clothing designed for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>

          <ul style={styles.list}>
            <li>Home</li>
            <li>Shop</li>
            <li>New Arrivals</li>
            <li>Trending</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Customer Care</h3>

          <ul style={styles.list}>
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>

          <p>Email: support@luxewear.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Mumbai, India</p>

          <div style={styles.socials}>
            <span style={styles.icon}>📘</span>
            <span style={styles.icon}>📷</span>
            <span style={styles.icon}>🐦</span>
            <span style={styles.icon}>▶️</span>
          </div>
        </div>

      </div>

      <hr style={styles.line} />

      <div style={styles.bottom}>
        © 2026 LuxeWear. All Rights Reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "60px 8% 20px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  logo: {
    color: "#ff3f6c",
    fontSize: "2rem",
    marginBottom: "10px",
  },

  description: {
    color: "#ccc",
    lineHeight: "1.8",
  },

  heading: {
    marginBottom: "10px",
    color: "#fff",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    color: "#ccc",
    lineHeight: "2",
    cursor: "pointer",
  },

  socials: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },

  icon: {
    fontSize: "24px",
    cursor: "pointer",
  },

  line: {
    border: "0.5px solid #333",
    margin: "40px 0 20px",
  },

  bottom: {
    textAlign: "center",
    color: "#999",
    fontSize: "14px",
  },
};

export default Footer;
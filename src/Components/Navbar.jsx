export function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        FashionHub
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li style={styles.link}>Home</li>
        <li style={styles.link}>Women</li>
        <li style={styles.link}>Men</li>
        <li style={styles.link}>Kids</li>
        <li style={styles.link}>Beauty</li>
        <li style={styles.link}>Sale</li>
      </ul>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        style={styles.search}
      />

      {/* Icons */}
      <div style={styles.icons}>
        <span>👤</span>
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ff3f6c",
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    fontWeight: "500",
    cursor: "pointer",
  },

  link: {
    transition: "0.3s",
  },

  search: {
    padding: "10px",
    width: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  icons: {
    display: "flex",
    gap: "18px",
    fontSize: "22px",
    cursor: "pointer",
  },
};

export default Navbar;
export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      review:
        "Absolutely love the quality and design! The collection is trendy, comfortable, and worth every penny.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Emily Davis",
      role: "Customer",
      review:
        "Fast delivery and amazing customer service. The outfits looked exactly like the pictures.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Olivia Wilson",
      role: "Fashion Enthusiast",
      review:
        "One of the best online fashion stores I've ever shopped from. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>What Our Customers Say</h2>
        <p style={styles.subtitle}>
          Thousands of happy customers trust us for their fashion needs.
        </p>
      </div>

      <div style={styles.container}>
        {reviews.map((review) => (
          <div key={review.id} style={styles.card}>
            <div style={styles.quote}>❝</div>

            <p style={styles.review}>
              {review.review}
            </p>

            <div style={styles.rating}>
              {review.rating}
            </div>

            <div style={styles.user}>
              <div style={styles.avatar}>
                {review.name.charAt(0)}
              </div>

              <div>
                <h4 style={styles.name}>{review.name}</h4>
                <p style={styles.role}>{review.role}</p>
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
    padding: "90px 8%",
    background: "#fafafa",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  quote: {
    fontSize: "50px",
    color: "#ff3f6c",
    marginBottom: "15px",
  },

  review: {
    color: "#555",
    lineHeight: "1.8",
    marginBottom: "20px",
  },

  rating: {
    fontSize: "18px",
    marginBottom: "20px",
  },

  user: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#ff3f6c",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },

  name: {
    margin: 0,
    color: "#222",
  },

  role: {
    margin: 0,
    color: "#777",
    fontSize: "14px",
  },
};

export default Testimonials;
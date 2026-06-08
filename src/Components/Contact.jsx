export function Contact() {
  return (
    <>
      <style>{`
        .contact {
          max-width: 700px;
          margin: 60px auto;
          padding: 40px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .contact h1 {
          font-size: 40px;
          color: #1e293b;
          margin-bottom: 10px;
        }

        .contact p {
          color: #64748b;
          margin-bottom: 30px;
          font-size: 16px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #38bdf8;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-btn {
          background: #38bdf8;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact-btn:hover {
          background: #0ea5e9;
        }
      `}</style>

      <section className="contact">
        <h1>Contact Us</h1>
        <p>Have a question or suggestion? We'd love to hear from you.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
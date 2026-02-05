import RatingForm from "../components/RatingForm";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Store Rating Platform</h1>
        <p style={styles.subtitle}>
          Share your experience by rating the store
        </p>
        <RatingForm />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "#333"
  },
  subtitle: {
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "2rem"
  }
};

export default Home;

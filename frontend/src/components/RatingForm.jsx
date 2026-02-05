import { useState } from "react";
import axios from "axios";

function RatingForm() {
  const [rating, setRating] = useState("3");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ratings",
        {
          storeId: "demo-store-id",
          rating: Number(rating)
        }
      );

      alert("✅ Rating saved in database");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to save rating");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Rate Store</label>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={styles.select}
      >
        <option value="1">⭐ 1 - Very Bad</option>
        <option value="2">⭐⭐ 2 - Bad</option>
        <option value="3">⭐⭐⭐ 3 - Average</option>
        <option value="4">⭐⭐⭐⭐ 4 - Good</option>
        <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
      </select>

      <button type="submit" style={styles.button} disabled={loading}>
        {loading ? "Saving..." : "Submit Rating"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem"
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#444",
    textAlign: "left"
  },
  select: {
    padding: "0.75rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "0.95rem",
    cursor: "pointer"
  },
  button: {
    marginTop: "1rem",
    padding: "0.9rem",
    borderRadius: "12px",
    border: "none",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    cursor: "pointer"
  }
};

export default RatingForm;

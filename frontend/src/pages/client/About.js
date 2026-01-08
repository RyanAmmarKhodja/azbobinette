import React from "react";

const About = () => {
  return (
    <div
      className="container"
      style={{
        paddingTop:"6em",
        marginBottom: "60px",
        fontFamily: "'Inter', sans-serif",
        color: "#2d3436",
      }}
    >
      {/* Section En-tête */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            fontWeight: "800",
            color: "#1C7435",
            fontSize: "2.5rem",
            marginBottom: "10px",
          }}
        >
          Horaires d'Ouverture
        </h2>
        <p style={{ color: "#636e72", fontSize: "1.1rem" }}>
          Préparez votre aventure sauvage au cœur d'Azbobinette.
        </p>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#1C7435",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* Section Grille des Horaires */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Carte Saison Haute */}
        <div
          style={{
            backgroundColor: "#f0f7f2",
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid rgba(28, 116, 53, 0.1)",
            transition: "transform 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3
            style={{
              color: "#1C7435",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Été{" "}
            <span
              style={{ fontSize: "0.9rem", fontWeight: "400", color: "#666" }}
            >
              (Avril - Sept)
            </span>
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Lundi - Vendredi</span>
              <strong>09:00 - 19:00</strong>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
              }}
            >
              <span>Week-end & Fériés</span>
              <strong>08:30 - 20:00</strong>
            </li>
          </ul>
        </div>

        {/* Carte Saison Basse */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "24px",
            border: "1px solid #eee",
            transition: "transform 0.3s ease",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3
            style={{
              color: "#2d3436",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Hiver{" "}
            <span
              style={{ fontSize: "0.9rem", fontWeight: "400", color: "#666" }}
            >
              (Oct - Mars)
            </span>
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Lundi - Vendredi</span>
              <strong>10:00 - 17:00</strong>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
              }}
            >
              <span>Week-end & Fériés</span>
              <strong>09:30 - 18:00</strong>
            </li>
          </ul>
        </div>

        {/* Note Importante */}
        <div
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            padding: "20px",
            fontSize: "0.9rem",
            color: "#95a5a6",
            fontStyle: "italic",
          }}
        >
          * Dernière entrée autorisée 1h30 avant la fermeture du parc.
        </div>
      </div>
    </div>
  );
};

export default About;

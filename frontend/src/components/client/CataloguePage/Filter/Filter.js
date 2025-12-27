import React, { useState, useEffect } from "react";
import api from "../../../../api";
import { useNavigate } from "react-router-dom";

function Filter() {
  const [continents, setContinents] = useState([]);
  const [families, setFamilies] = useState([]);

  const [family, setFamily] = useState("");
  const [continent, setContinent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    {
      api.get("/continents").then((res) => {
        setContinents(res.data);
      });
    }

    api.get("/family").then((res) => {
      setFamilies(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (family) {
      params.append("family_id", family);
    }
    if (continent) {
      params.append("continent", continent);
    }

    const queryString = params.toString();
    navigate(
      `/catalogue?${queryString}`
    );
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
      >
        <div
          style={{
            display: "flex",
            justifyItems: "baseline",
            alignItems: "center",
          }}
        >
          <label htmlFor="exampleSelect1" class="form-label">
            Catégorie
          </label>

          <select
            className="m-4 form-control"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          >
            <option value={null}></option>
            {families.map((family) => (
              <option key={family.id} value={family.id}>
                {family.name}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyItems: "baseline",
            alignItems: "center",
          }}
        >
          <label htmlFor="exampleSelect1" class="form-label">
            Continent
          </label>
          <select
            className="m-4 form-control"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          >
            <option value={null}></option>
            {continents.map((continent) => (
              <option key={continent.id} value={continent.id}>
                {continent.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-outline-success" type="submit">
          Recherche
        </button>
      </form>
    </>
  );
}

export default Filter;

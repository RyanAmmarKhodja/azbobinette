import React, { useState, useEffect } from "react";
import api from "../../../../api";
import { useNavigate } from "react-router-dom";
import "./Filter.css";

function Filter() {
  const [continents, setContinents] = useState([]);
  const [families, setFamilies] = useState([]);

  const [family, setFamily] = useState("");
  const [continent, setContinent] = useState("");
  const navigate = useNavigate();

  
  const [search, setSearch] = useState("");
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

  
  
  
    // const handleSearch = (e) => {
    //   e.preventDefault();
    //   navigate(`/catalogue?search=${encodeURIComponent(search)}`);
    // };


  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if(search){
      params.append("search",search)
    }
    if (family) {
      params.append("family_id", family);
    }
    if (continent) {
      params.append("continent", continent);
    }

    const queryString = params.toString();
    navigate(`/catalogue?${queryString}`);
  };

  const clearFilters = (e)=>{
    setContinent("");
    setFamily("");
    setSearch("");
  }
  return (
    <>
      <form onSubmit={handleSearch} className="mx-5">
        <input
          id="searchInput"
          type="text"
          class="input-gray p-2 px-3"
          placeholder="Rechercher..."
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
        ></input>

        <div className="row">
          <div className="col text-start">
            <select
              className="my-4 p-2 px-3"
              value={family}
              onChange={(e) => setFamily(e.target.value)}
            >
              <option value={null} selected hidden>
                Catégorie
              </option>
              {families.map((family) => (
                <option key={family.id} value={family.id}>
                  {family.name}
                </option>
              ))}
            </select>

            <select
              className="my-4 p-2 px-3 mx-2"
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
            >
              <option value={null} hidden selected>
                Continent
              </option>
              {continents.map((continent) => (
                <option key={continent.id} value={continent.id}>
                  {continent.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col text-end">
            {(family || continent || search) &&
            <a className="mx-3" onClick={clearFilters}>Clear Filters</a>
            }
            
            <button className="my-4 p-2 px-3 button" type="submit">
              Recherche
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Filter;

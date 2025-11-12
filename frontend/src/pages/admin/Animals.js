import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Modal from "../../components/Modal";
import Loading from "../../components/Loading";
import api from "../../api";

const Animals = (props) => {
  const [showModal, setShowModal] = useState(props.showModal || false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [animals, setAnimals] = useState([]);
  const [editId, setEditId] = useState(null);
  const [selectedContinents, setSelectedContinents] = useState([]);
  const [continents, setContinents] = useState([]);
  const [families, setFamilies] = useState([]);
  const [familyId, setFamilyId] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [imagePath, setImagePath] = useState(null);
  const [preview, setPreview] = useState(null);

  // Removed global data variable; will declare inside updateAnimal

  // Fetch continents and animals on component mount
  useEffect(() => {

    setLoading(true);

    // Fetch continents and families
    api.get("/continents").then((res) => setContinents(res.data));
    api.get("/family").then((res) => {
      setFamilies(res.data);
      if ((res.data || []).length > 0) {
        setFamilyId(res.data[0].id);
      }
    });
    
    // Fetch animals
    api
      .get("/animals")
      .then((res) => {
        setAnimals(res.data.data || res.data);
        console.log("Animals fetched:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching animals:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Submit function to handle both add and update
  const submit = (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (editId) {
      return updateAnimal(e);
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("family_id", familyId);
    formData.append("description", description);

    // Continents (array)
    selectedContinents.forEach((c, i) => {
      formData.append(`continents[${i}]`, c);
    });

    // Only append if an image was selected
    if (imagePath) {
      formData.append("photo", imagePath); 
    }
    console.log("Image :", imagePath);
    api
      .post("/animals/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log("Animal added:", res.data);
        //setShowModal(false);
        setAnimals([...animals, res.data.animal]);
        setSuccess("Animal added successfully");
        setImagePath(null);
        setPreview(null);
        setName("");
        setDescription("");
      })
      .catch((err) => {
        setError(`Error adding animal: ${err?.message || err}`);
        console.error("Error adding animal:", err);
      });
  };

  // Delete animal function
  const deleteAnimal = (id) => {
    api
      .delete(`/animals/delete/${id}`)
      .then((res) => {
        console.log("Animal deleted:", res.data);
        setAnimals((prev) => prev.filter((animal) => animal.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting animal:", err);
      });
  };

  // Edit animal function
  const editAnimal = (id) => {
    const animal = animals.find((animal) => animal.id === id);
    if (animal) {
      setFamilyId(animal.family.id);
      setSelectedContinents(animal.continents.map((c) => c.id));
      setName(animal.name);
      setDescription(animal.description);
      setShowModal(true);
      setEditId(id);
    }
  };

  // Update animal function
  const updateAnimal = (e) => {
    e.preventDefault();
    const id = editId;
    const data = {
      name,
      family_id: familyId,
      description,
      image_path: imagePath,
      continents: selectedContinents,
    };
    if (id) {
      api
        .put(`/animals/update/${id}`, data)
        .then((res) => {
          console.log("Animal updated:", res.data);
          setAnimals((prev) =>
            prev.map((animal) => (animal.id === id ? res.data.animal : animal))
          );
          setSuccess("Animal updated successfully");
          //setShowModal(false);
          setEditId(null);
        })
        .catch((err) => {
          setError(`Error updating animal: ${err?.message || err}`);
          console.error("Error updating animal:", err);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-end">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              setShowModal(true);
              setEditId(null);
              setName("");
              setDescription("");
              setImagePath(null);
              setPreview(null);
              setSelectedContinents([]);
              setFamilyId(families.length > 0 ? families[0].id : 1);
            }}
          >
            <Plus /> Ajouter un animal
          </button>
        </div>
      </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom d'un animal</th>
              <th scope="col">Description</th>
              <th scope="col">Famille</th>
              <th scope="col">Continents</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal, index) => (
              <tr
                key={animal.id}
                className={index % 2 === 0 ? "table-active" : ""}
              >
                <th scope="row">{index + 1}</th>
                <td>{animal.name}</td>
                <td>{animal.description}</td>
                <td>{animal.family.name}</td>
                <td>
                  {animal.continents.map((continent) => (
                    <span key={continent.id}>{continent.name}. </span>
                  ))}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm mx-2"
                    onClick={() => editAnimal(animal.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => deleteAnimal(animal.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Start */}
      <Modal
        show={showModal}
        title="Ajouter des animaux"
        onClose={() => setShowModal(false)}
      >
        <form action="">
          <fieldset>
            <div>
              <label htmlFor="text" className="form-label mt-4">
                Animal Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter animal name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="exampleSelect1" className="form-label mt-4">
                Famille
              </label>
              <select
                className="form-select"
                id="exampleSelect1"
                value={familyId}
                onChange={(e) => setFamilyId(parseInt(e.target.value, 10))}
              >
                {families.map((family) => (
                  <option key={family.id} value={family.id}>
                    {family.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="formFile" className="form-label mt-4">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                id="formFile"
                onChange={(e) => {
                  setImagePath(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <br />
              {preview && <img src={preview} alt="preview" width={150} />}
              <br />
            </div>

            {/* Checkbox to select multiple continents */}
            <label className="form-label mt-4">Select Continents</label>
            {continents.map((continent) => (
              <div className="form-check" key={continent.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={continent.id}
                  id={`flexCheckDefault-${continent.id}`}
                  checked={selectedContinents.includes(continent.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedContinents([
                        ...selectedContinents,
                        continent.id,
                      ]);
                    } else {
                      setSelectedContinents(
                        selectedContinents.filter((c) => c !== continent.id)
                      );
                    }
                  }}
                />
                <label
                  key={continent.id}
                  className="form-check-label"
                  htmlFor={`flexCheckDefault-${continent.id}`}
                >
                  {continent.name}
                </label>
              </div>
            ))}

            <div>
              <label htmlFor="textarea" className="form-label mt-4">
                Animal Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Enter animal description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button
              onClick={submit}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Submit
            </button>

            {success && (
              <div className="alert alert-dismissible alert-success mt-4">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                ></button>
                <p>{success}</p>
              </div>
            )}

            {error && (
              <div className="alert alert-dismissible alert-danger mt-4">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                ></button>
                <p>{error}</p>
              </div>
            )}
          </fieldset>
        </form>
      </Modal>
      {/* Modal End */}

      <Loading loading={loading} />
    </div>
  );
};

export default Animals;

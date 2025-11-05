import React, {useEffect, useState} from "react";
import { Plus } from "lucide-react";
import Modal from "../../components/Modal";
import api from "../../api";

const Families = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    api
      .get("/family")
      .then((res) => {
        setFamilies(res.data);
        console.log("Families fetched:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching families:", err);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    api
      .post("/family/create", { name, description })
      .then((res) => {
        console.log("Family added:", res.data);
        //setShowModal(false);
        setSuccess("Family added successfully");
        setName("");
        setDescription("");
      })
      .catch((err) => {
        setError("Error adding family", err);
        console.error("Error adding family:", err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-end">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setShowModal(true)}
          >
            <Plus /> Ajouter une famille d'animaux
          </button>
        </div>
      </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom de familles d'animaux</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {families.map((family, index) => (
              <tr key={family.id} className={index % 2 === 0 ? "table-active" : ""}>
                <th scope="row">{index + 1}</th>
                <td>{family.name}</td>
                <td>{family.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-sm mx-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm mx-2"
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
        title="Ajouter une famille d'animaux"
        onClose={() => setShowModal(false)}
      >
        <form action="">
          <fieldset>
            <div>
              <label for="text" className="form-label mt-4">
                Family Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter family name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label for="textarea" className="form-label mt-4">
                Family Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Enter family description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button onClick={submit} type="submit" className="btn btn-primary mt-4">
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
    </div>
  );
};

export default Families;

import React from "react";
import {Plus} from 'lucide-react';

const Families = () => {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col text-end">
          <button type="button" className="btn btn-outline-primary">
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
            <tr className="table-active">
              <th scope="row">2</th>
              <td>Dogs</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos asperiores, maiores totam voluptatem nihil
                praesentium, at molestias placeat quo nulla eligendi culpa ab.
                Architecto rem neque qui. Dolores, maxime vel!
              </td>
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
            <tr>
              <th scope="row">3</th>
              <td>Cats</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos asperiores, maiores totam voluptatem nihil
                praesentium, at molestias placeat quo nulla eligendi culpa ab.
                Architecto rem neque qui. Dolores, maxime vel!
              </td>
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
          </tbody>
        </table>
      </div>


      <div className="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Families;

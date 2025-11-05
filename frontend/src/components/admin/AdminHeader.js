import React from "react";

const AdminHeader = () => {
  return (
    <div className="row mb-2">
      <div className="col-sm-6">
        <h5 className="m-0 text-dark" style={{ textAlign: "start" }}>
          Dashboard
        </h5>
      </div>

      <div className="col-sm-6">
        <ol className="breadcrumb" style={{ float: "right" }}>
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active">Dashboard v1</li>
        </ol>
      </div>
    </div>
  );
};

export default AdminHeader;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import Card from "../../components/admin/Card";

const Dashboard = () => {

  

  return (
    <div>

      <div className="d-flex align-items-center gap-4 my-4" style={{width:"100vw", justifyContent:"center"}}>
        <Card type="animals" />

        <Card type="families" />
      </div>
      
    </div>
  );
};

export default Dashboard;

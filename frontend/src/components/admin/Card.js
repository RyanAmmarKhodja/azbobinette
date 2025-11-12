import React from "react";
import { NavLink } from "react-router-dom";
import api from "../../api";

const Card = (props) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (props.type === "families") {
      const fetchCount = async () => {
        try {
          const res = await api.get("/family");
          setCount(res.data.length);
        } catch (err) {
          console.error(err);
        }
      };
      fetchCount();
    } else if (props.type === "animals") {
      const fetchCount = async () => {
        try {
          const res = await api.get("/animals");
          setCount(res.data.data.length);
        } catch (err) {
          console.error(err);
        }
      };
      fetchCount();
    }
  }, [props.type]);

  return (
    <div
      className={`card text-white bg-${
        props.type == "animals" ? "info" : "primary"
      } mb-3`}
      style={{ minWidth: "20rem" }}
    >
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">
          {count} {props.type == "animals" ? "Animals" : "Familles d'animaux"}
        </h4>
        {/* <a href="#" className="stretched-link" style={{ color: "White" }}>Plus d'info</a> */}
        <NavLink
          to={`/admin/${props.type}`}
          className="stretched-link"
          style={{ color: "White" }}
        >
          Plus d'info
        </NavLink>
      </div>
    </div>
  );
};

export default Card;

import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const titleMap = {
    dashboard: "Dashboard",
    animals: "Animals",
    "viewanimals": "View Animals",
    "addanimal": "Add Animal",
    families: "Families",
    "viewfamilies": "View Families",
    "addfamily": "Add Family",
    settings: "Settings",
  };

  return (
      <ol className="breadcrumb mb-0" style={{ float: "right" }}>
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const formattedName = titleMap[name.toLowerCase()] 
            || name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

          return isLast ? (
            <li key={name} className="breadcrumb-item active" aria-current="page">
              {formattedName}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item">
              <Link to={routeTo}>{formattedName}</Link>
            </li>
          );
        })}
      </ol>
  );
}

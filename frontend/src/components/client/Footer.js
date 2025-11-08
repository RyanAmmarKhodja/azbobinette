import { Facebook, Instagram, InstagramIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-4 my-0 border-top"
        style={{
          backgroundColor: "#1C7435",
          clipPath: "ellipse(81% 66% at 49% 66%)",
        }}
      >
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            <svg class="bi" width="30" height="24" aria-hidden="true">
              <use></use>
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary " style={{color:"white"}}>Azbobinette, Inc</span>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex px-5">
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <InstagramIcon height={24} width={24} />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <Facebook height={24} width={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;

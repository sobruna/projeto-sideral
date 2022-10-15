import React from "react";

import logo from "../../Images/icon.png";
import BootstrapCarousel from "./BootstrapCarousel";
import css from "../../Style/Import.css";
import Default from "../Templates/Default";

export default function Home() {
  return (
    <Default>
      <div className="container-fluid d-flex justify-content-center">
        <BootstrapCarousel />
      </div>
    </Default>
  );
}

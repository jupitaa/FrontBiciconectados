import React from 'react';
import "./buttonconocenos.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ConocenosButton() {
  return (
    <Link to="/conocenos" className="conocenos-button">
      Conócenos <FaRegArrowAltCircleRight />
    </Link>
  );
}

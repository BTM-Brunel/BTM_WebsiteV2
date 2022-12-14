import React from "react";

export default function ServiceCard({ icon, title, text }) {

  return (
    <button className="service-card">
      <i className={icon + " card-icon"}></i>
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
    </button>
  );
}
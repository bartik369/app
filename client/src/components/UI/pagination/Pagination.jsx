import React from "react";
import './pagination.css'
import { Routes, Route, Link } from "react-router-dom";

const Pagination = ({ devicesPerPage, totalDevices, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDevices / devicesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul className="container">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <a onClick={() => paginate(number)} 
            href="#!" 
            className={number == currentPage ? "active" : ""}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;


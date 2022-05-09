import React from "react";
import './pagination.css'

const Pagination = ({ devicesPerPage, totalDevices, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDevices / devicesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul className="container">
        {pageNumbers.map((number) => (
          <li key={number} className={`pagination-item active ${currentPage ? 'active' : ''}` }>
            <a onClick={() => paginate(number)} href="#!" className="pagination-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

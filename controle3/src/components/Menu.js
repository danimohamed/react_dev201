import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Menu</h5>
        </div>
        <div className="card-body">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/" className="btn btn-link">Accueil</Link>
              </li>
              <li className="list-group-item">
                <Link to="/q3" className="btn btn-link">Q3</Link>
              </li>
              <li className="list-group-item">
                <Link to="/q4" className="btn btn-link">Q4</Link>
              </li>
              <li className="list-group-item">
                <Link to="/q5" className="btn btn-link">Q5</Link>
              </li>
              <li className="list-group-item">
                <Link to="/q6" className="btn btn-link">Q6</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;

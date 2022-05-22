import React from "react";
import styles from "./NavBar.module.css";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className={styles.NavbarBackground}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a
            className="navbar-brand NavName"
            href="/"
            style={{ fontSize: 30, fontWeight: 800, }}
          >
            Essa World
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-10 mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Glocery
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Bakery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pasta and Rice
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Soups and Canned Goods.
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <input
              className="form-control mx-5" 
              style={{width:"500px"}}
              type="search"
              placeholder="🔍 Search Your Product from here"

            />
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className='m-2'>
                Hurry Order
              </li>
              <li className='m-2'>
                Shops
              </li>
              <li className='m-2'>
                Offer
              </li>
              <li className='m-2'>
                Faq
              </li>
              <li className='m-2'>
                Contract
              </li>
              <AccountCircle style={{ fontSize:40}}/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import PropTypes from "prop-types";
import React from "react";
import GasPricesComponent from "./GasPricesComponent"; // Importowanie komponentu GasPricesComponent

// Dodaj style inline lub zdefiniuj klasy w jednym miejscu w pliku
const styles = {
  gasPricesContainer: {
    display: "flex",
  },
  lowestPrice: {
    border: "2px solid green",
    padding: "5px",
  },
};

export default function Menu({ menu: { items } }) {
  return (
    <div>
      <div>
        <GasPricesComponent />
        <br />
	<br />
      </div>
      <div className="main-menu self-center hidden md:block">
        <ul className="nav flex space-x-275 justify-content-center">
          {items.map((i, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="nav-item" key={index}>
              <a className="nav-link hover:underline" href={i.url}>
                {i.name}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a className="nav-link hover:underline" href={"/page/contact"}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export const layout = {
  areaId: "header",
  sortOrder: 1,
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
import React, { useEffect, useState } from "react";

import "./style.scss";

const Sidebar = (props) => {
  const [filters, setFilters] = useState({
    color: [],
    gender: [],
    price: [],
    cloth: [],
  });

  const {setData, originalData } = props;

  const handleFilter = (e, action) => {
    if (e.target.checked) {
      switch (action.type) {
        case "color":
          setFilters({
            ...filters,
            color: [...filters.color, action.value],
          });
          break;

        case "gender":
          setFilters({
            ...filters,
            gender: [...filters.gender, action.value],
          });
          break;

        case "price":
          setFilters({
            ...filters,
            price: [...filters.price, action.value],
          });
          break;

        case "type":
          setFilters({
            ...filters,
            cloth: [...filters.cloth, action.value],
          });
          break;

        default:
          break;
      }
    } else {
      switch (action.type) {
        case "color":
          setFilters({
            ...filters,
            color: filters.color.filter((item) => item !== action.value),
          });
          break;

        case "gender":
          setFilters({
            ...filters,
            gender: filters.gender.filter((item) => item !== action.value),
          });
          break;

        case "price":
          setFilters({
            ...filters,
            price: filters.price.filter((item) => item !== action.value),
          });
          break;

        case "type":
          setFilters({
            ...filters,
            cloth: filters.cloth.filter((item) => item !== action.value),
          });
          break;

        default:
          break;
      }
      setData(originalData);
    }
  };

  // filter
  const filterData = () => {

    let filteredData = [...originalData];

    if (filters.color.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.color.includes(item.color.toLowerCase());
      });
    }

    if (filters.gender.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.gender.includes(item.gender.toLowerCase());
      });
    }

    if (filters.price.length > 0) {
      filteredData = filteredData.filter((item) => {
        if (filters.price.includes(250) && item.price <= 250) {
          return true;
        }
        if (filters.price.includes(450) && item.price > 250 && item.price <= 450) {
          return true;
        }
        if (filters.price.includes(451) && item.price > 450) {
          return true;
        }
        return false;
      });
    }

    if (filters.cloth.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.cloth.includes(item.type.toLowerCase());
      });
    }

    setData(filteredData);
  };

  useEffect(() => {
    filterData();
  }, [filters]);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <p>Color</p>
        <ul className="color">
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "color", value: "red" })}
            />
            <span>Red</span>
          </li>

          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "color", value: "blue" })}
            />
            <span>Blue</span>
          </li>

          <li className="list">
            <input
              type="checkbox"
              onClick={(e) =>
                handleFilter(e, { type: "color", value: "green" })
              }
            />
            <span>Green</span>
          </li>
        </ul>

        <p>Gender</p>
        <ul className="gender">
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "gender", value: "men" })}
            />
            <span>Men</span>
          </li>

          <li className="list">
            <input
              type="checkbox"
              onClick={(e) =>
                handleFilter(e, { type: "gender", value: "women" })
              }
            />
            <span>Women</span>
          </li>
        </ul>

        <p>Price</p>
        <ul className="price">
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "price", value: 250 })}
            />
            <span>0-Rs250</span>
          </li>
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "price", value: 450 })}
            />
            <span>Rs250-450</span>
          </li>
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "price", value: 451 })}
            />
            <span>Rs450</span>
          </li>
        </ul>

        <p>Type</p>
        <ul className="type">
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "type", value: "polo" })}
            />
            <span>Polo</span>
          </li>
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "type", value: "hoodie" })}
            />
            <span>Hoodie</span>
          </li>
          <li className="list">
            <input
              type="checkbox"
              onClick={(e) => handleFilter(e, { type: "type", value: "basic" })}
            />
            <span>Basic</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

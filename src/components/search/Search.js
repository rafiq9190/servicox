import React, { useState } from "react";
import { data } from "../../data";
import "./form.css";
function Search() {
  const [userValue, setUserValue] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const valueAdded = parseInt(userValue);
    const newArr = [...data];
    newArr.push(valueAdded);
    setUserValue(0);
  };
  return (
    <div className="form">
      <div className="form-input">
        <input
          type="number"
          className="form-control"
          onChange={(e) => setUserValue(e.target.value)}
        />
        <button type="submit" onClick={submitHandler} className="submit">
          Submit
        </button>
      </div>

      <div className="form-button">
        <button type="submit" className="btn">
          Release JSON123 Data
        </button>
        <button type="submit" className="btn">
          Release JSON123 Data
        </button>
      </div>
    </div>
  );
}

export default Search;

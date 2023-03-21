import React from "react";
import "./App.css";

function Cards(props) {
    const {
    pic,
    first,
    last,
    gender,
    age,
    email,
    city,
    index,
    isHidden,
    curUser,
    handleClick,
} = props;

    return (
        <div className="container">
          <div className="card">
            <div className="img">
              <img src={pic} alt="user img" />
            </div>
            <div className="content">
              <h5>
                {first} {last}
              </h5>
              <p>Gender: {gender}</p>
              {isHidden && curUser === index ? (
                <ul>
                  <li>Age: {age}</li>
                  <li>Email: {email}</li>
                  <li>City: {city}</li>
                </ul>
              ) : (
                <div></div>
              )}
              <button onClick={() => handleClick(index)}>
                {isHidden && curUser === index ? "Hide info" : "Show more"}
              </button>
            </div>
          </div>
        </div>
      );
}

export default Cards;
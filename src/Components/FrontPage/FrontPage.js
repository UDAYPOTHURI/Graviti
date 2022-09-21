import React from "react";
import logo from "./Graviti_Logo_1.png";
import { useState } from "react";
import "./FrontPage.css";

function FrontPage() {
  const [enteredOrigin, setEnteredOrigin] = useState("");
  const [enteredDestination, setEnteredDestination] = useState("");

  const originChangeHandler = (event) => {
    setEnteredOrigin(event.target.value);
  };

  const destinationChangeHandler = (event) => {
    setEnteredDestination(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const place = {
      origin: enteredOrigin,
      destination: enteredDestination,
    };

    console.log(place);
  };

  return (
    <div>
      <div className="container">
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="page">
        <p className="text">
          Let's calculate <b>distance</b> from Google maps
        </p>
        <div className="container">
          <div className=" row">
            <div className="pdd col-l-6 col-md-6 col-sm-12 ">
              <div className="container col-sm-9 pdd1">
                <form onSubmit={submitHandler}>
                  <div className=" row">
                    <div className="mb-3 col-sm-5">
                      <label className="form-label tex">origin</label>
                      <input
                        type="text"
                        value={enteredOrigin}
                        onChange={originChangeHandler}
                        className="form-control br"
                        placeholder="Origin"
                        name="Origin"
                      ></input>
                    </div>
                    <div className="text1">
                      <button type="submit" className=" btn btnn1">
                        Calculate
                      </button>
                    </div>
                    <div className="mb-3 col-sm-5">
                      <label className="form-label tex ">destination</label>
                      <input
                        type="text"
                        value={enteredDestination}
                        onChange={destinationChangeHandler}
                        className="form-control br"
                        placeholder="Destination"
                        name="Destination"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-9 container">
                <div className="bg row" style={{ border: "1px solid #E9EEF2" }}>
                  <div className="col">Distance</div>
                  <div className="col text-end ">1234</div>
                </div>
                <div className="row">
                  <p className="ta border">
                    The distance between <b>{enteredOrigin}</b> and{" "}
                    <b>{enteredDestination}</b> is 1234
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-l-6 col-md-6 col-sm-12">hi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;

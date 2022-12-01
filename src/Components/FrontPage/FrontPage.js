import React, { useEffect } from "react";
import logo from "./Graviti_Logo_1.png";
import { useState } from "react";
import "./FrontPage.css";
import axios from "axios";
// import { response } from "express";

function FrontPage() {
  const [enteredOrigin, setEnteredOrigin] = useState("");
  const [enteredDestination, setEnteredDestination] = useState("");
  // const [content, setcontent] = useState("")
  const [dist, setdist] = useState("");
  const [enteredOriginlat, setEnteredOriginlat] = useState("");
  const [enteredOriginlong, setEnteredOriginlong] = useState("");
  const [enteredDestinationlat, setEnteredDestinationlat] = useState("");
  const [enteredDestinationlong, setEnteredDestinationlong] = useState("");

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

  // // var src="https://www.google.com/maps/dir/?api=AIzaSyAolXVBph__8LXk-JukgnxDUI4LPDQAsxQ&origin="+{enteredOrigin}+"&destination="+{enteredDestination}+"&travelmode=driving"

  // // var src1 = "https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling";
  // const getlist1 = () => {
  //   axios
  //     .get("https://api.quotable.io/random")
  //     .then((res) => {
  //       console.log(res.data.content);
  //       setcontent(res.data.content)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    // const identifier = setTimeout(() => {
    // const getlocation = () => {
    const options1 = {
      method: "GET",
      url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
      params: {
        city: enteredOrigin,
        "accept-language": "en",
        polygon_threshold: "0.0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY1,
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };

    axios
      .request(options1)
      .then(function (respons) {
        // console.log(respons.data);
        const ola = respons.data[0].lat;
        const olo = respons.data[0].lon;
        // console.log(respons.data[0].lat);
        // console.log(enteredOriginlat);
        setEnteredOriginlat(ola);
        setEnteredOriginlong(olo);
        // console.log(enteredOriginlat);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options2 = {
      method: "GET",
      url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
      params: {
        city: enteredDestination,
        "accept-language": "en",
        polygon_threshold: "0.0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY1,
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };

    axios
      .request(options2)
      .then(function (respon) {
        // console.log(respon.data);
        const dla = respon.data[0].lat;
        const dlo = respon.data[0].lon;
        setEnteredDestinationlat(dla);
        setEnteredDestinationlong(dlo);
      })
      .catch(function (error) {
        console.error(error);
      });
    // }, 500);
    // return () => {
    //   console.log('hi');
    //   clearTimeout(identifier);
    // };
    // };
  }, [
    enteredOriginlat,
    enteredDestination,
    enteredOrigin,
    enteredOriginlong,
    enteredDestinationlat,
    enteredDestinationlong,
    dist,
  ]);

  const getdistance = () => {
    const options = {
      method: "GET",
      url: "https://distance-calculator8.p.rapidapi.com/calc",
      params: {
        startLatitude: enteredOriginlat,
        startLongitude: enteredOriginlong,
        endLatitude: enteredDestinationlat,
        endLongitude: enteredDestinationlong,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY1,
        "X-RapidAPI-Host": "distance-calculator8.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setdist(response.data.body.distance.kilometers);
      })
      .catch(function (error) {
        console.error(error);
        // console.log(enteredOriginlat);
      });
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
                      <button
                        type="submit"
                        className=" btn btnn1"
                        onClick={getdistance}
                      >
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
                  <div className="col text-end ">
                    <b>{parseFloat(dist).toFixed(2)} Km</b>
                  </div>
                </div>
                <div className="row">
                  <p className="ta border">
                    The distance between <b>{enteredOrigin}</b> and{" "}
                    <b>{enteredDestination}</b> is{" "}
                    <b>{parseFloat(dist).toFixed(2)} Km</b>
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-l-6 col-md-6 col-sm-12">
              <b>{parseFloat(dist).toFixed(2)} Km</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;

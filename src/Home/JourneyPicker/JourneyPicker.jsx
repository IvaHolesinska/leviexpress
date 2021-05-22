import React, { useState, useEffect } from 'react';
import mapImage from './img/map.svg';

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState(' ');
  const [toCity, setToCity] = useState(' ');
  const [date, setDate] = useState(' ');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity, toCity, date);
  };

  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/cities`)
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  const CityOptions = (props) => {
    return (
      <>
        <option value="">Vyberte</option>
        {props.cityList.map((city) => (
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/dates`)
      .then((resp) => resp.json())
      .then((json) => setDates(json.data));
  }, []);

  const DatesOptions = (props) => {
    return (
      <>
        <option value="">Vyberte</option>
        {props.datesList.map((date) => {
          return <option key={date}>{date}</option>;
        })}
      </>
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(event) => {
                setFromCity(event.target.value);
              }}
            >
              {/* <option value="">Vyberte</option> */}
              {/* <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option> */}
              <CityOptions cityList={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(event) => {
                setToCity(event.target.value);
              }}
            >
              {/* <option value="">Vyberte</option> */}
              {/* <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option> */}
              <CityOptions cityList={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            >
              {/* <option value="">Vyberte</option>
              <option>20.05.2021</option>
              <option>21.05.2021</option>
              <option>22.05.2021</option>
              <option>23.05.2021</option> */}
              <DatesOptions datesList={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button onClick={handleSubmit} className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
export default JourneyPicker;

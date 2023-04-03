import React, { useState } from 'react';
import Style from './Home.module.css';
import { FaSearch } from 'react-icons/fa';
import list from '../test.json';

export default function Home() {
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  async function fetchData() {
    if (!searchData) {
      alert('Please enter a city name');
      return;
    } else {
      console.log(searchData);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=f56f24967aaf51182d1d4df628297c6d`
      );
      const myWeather = await res.json();
      console.log(myWeather, 'line no 25');

      setData(myWeather);
      setShow(true);
    }
  }
  function handleChange(e) {
    setSearchData(e.target.value);
  }

  function handleKeyPress(event) {
      console.log(event.key)
    if (event.key === 'Enter') {
      fetchData();
    }
  }

  return (
    <div className={Style.box}>
      <div className={ Style.searchBox}>
      <div className={Style.searchicon}>
        <FaSearch/>
        </div>
      <div >
        <input
          placeholder="Search"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={searchData}
        />
      
       </div>
      {show ? (
        <>
          {Object.keys(data).length > 0 && (
            <div className={Style.container}>
              <>
                <h1>{data.name}</h1>
                <p>Temperature: {data.main?.temp}</p>
                <p>Humidity: {data.main?.humidity}%</p>
                <p>Speed: {data.wind?.speed} km / h</p>
              </>
            </div>
          )}
        </>
      ) : (
        <div className={Style.containerr}>
          <h1>Kanpur</h1>
          <p>Temperature: 17 C</p>
          <p>Humidity: 48%</p>
          <p>Speed: 8 km / h</p>
            
        </div>
      )}
    </div>
    </div>
  );
}

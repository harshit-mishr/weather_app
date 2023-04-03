import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import Style from "./NavBar.module.css"
import { WiCloud, WiDayCloudy, WiDayRain } from 'react-icons/wi';
export default function NavBar() {
  return (
    <div className={Style.box}>
      <sub className={Style.icon} >
        <TiWeatherSunny/>
      </sub >
      <b className={Style.iconText} > weather</b>
    </div>
  );
}

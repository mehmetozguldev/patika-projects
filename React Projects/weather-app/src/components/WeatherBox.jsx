import React from 'react';
import { useWeather } from '../context/WeatherContext';

function WeatherBox() {
  const { weather } = useWeather();

  if (!weather) {
    return <div><p>Yükleniyor lütfen bekleyin</p></div>;
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {weather.list.map((data, index) => {
          if (index % 8 === 0 || index === 39) {
            return (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2 text-center">
                <div className={`border ${index === 0 && "border-secondary"} p-4`}>
                  <h3 className="mt-3">{new Date(data.dt * 1000).toString().split(' ')[0]}</h3>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weatherIMG' />
                  <p><span>{data.main.temp_max.toFixed(1)}° / {data.main.temp_min.toFixed(1)}°</span></p>
                  <p>{data.dt_txt}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default WeatherBox;

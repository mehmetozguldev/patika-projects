import { WeatherProvider } from './context/WeatherContext';
import { GetCoordinatesByLocationProvider } from './context/GetCoordinates';
import WeatherBox from './components/WeatherBox';
import "./App.css";
import DropdownList from './components/DropdownList';

const App = () => {
  return (
    <>
      <div className="container p-5">
          <GetCoordinatesByLocationProvider>
            <WeatherProvider>
              <div className='bg-image'></div>
              <div>
                <div className='row'>
                  <h1 className="text-xl">Weather App</h1>
                </div>
                <DropdownList />
                <WeatherBox />
              </div>
            </WeatherProvider>
          </GetCoordinatesByLocationProvider>
      </div>
    </>
  )
}

export default App;
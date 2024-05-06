import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { DateTime } from 'luxon';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { SpinnerRoundOutlined } from 'spinners-react';

function Final() {
  const [ip, setIp] = useState('');
  const [isp, setIsp] = useState('');
  const [location, setLocation] = useState({});
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_IPIFY_API_KEY
          }`
        );
        // console.log(response);
        setIp(response.data.ip);
        setIsp(response.data.isp);
        setLocation({
          lat: response.data.location.lat,
          lng: response.data.location.lng,
          city: response.data.location.city,
          country: response.data.location.country,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchIP();
  }, []);

  useEffect(() => {
    const fetchCountryData = async () => {
      if (location.country) {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/alpha/${location.country}`
          );
          console.log(response);
          const data = response.data[0];
          setCountryInfo({
            name: data.name.common,
            flag: data.flags.png,
            capital: data.capital,
            population: data.population,
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchCountryData();
  }, [location.country]);

  //   console.log(import.meta.env.VITE_IPIFY_API_KEY);
  //   if (!ip) return <p>Loading...</p>;

  //   const localDate = DateTime.now().toLocaleString(DateTime.DATETIME_FULL.FULL);
  const localDate = DateTime.now().toFormat('dd.MM.yyyy');
  const localTime = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
  const nyTime = DateTime.now()
    .setZone('America/New_York')
    .toLocaleString(DateTime.TIME_24_SIMPLE);

  return (
    <>
      <div className=' flex flex-col items-center mt-10'>
        <div className='text-center mb-4'>
          <h1 className='text-3xl font-semibold'>WHAT'S MY IP?</h1>
          <p className='text-gray-500 text-lg'>{ip}</p>
        </div>
        <div
          className={` w-full max-w-2xl h-[500px] rounded-lg overflow-hidden ${
            ip ? 'border-4 border-blue-500' : ''
          }`}
        >
          {!ip ? (
            <div className='absolute inset-0 flex items-center justify-center'>
              <SpinnerRoundOutlined
                size={90}
                thickness={100}
                speed={100}
                color='rgba(57, 105, 172, 1)'
              />
            </div>
          ) : (
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={12}
              className='w-full h-full'
            >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={[location.lat, location.lng]}>
                <Popup>
                  <div className='bg-white p-4 rounded-lg'>
                    <img
                      src={countryInfo.flag}
                      alt={countryInfo.name}
                      width='50'
                    />
                    <div className='font-semibold'>
                      <p>IP: {ip}</p>
                      <p>Location: {location.city}</p>
                      <p>Provider: {isp}</p>
                      <p>Country: {countryInfo.name}</p>
                      <p>Capital: {countryInfo.capital}</p>
                      <p>Population: {countryInfo.population}</p>
                      <p>Date: {localDate}</p>
                      <p>Time: {localTime}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
}

export default Final;

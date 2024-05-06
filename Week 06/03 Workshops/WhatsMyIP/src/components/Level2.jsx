import { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Level2() {
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
  if (!ip) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h2>WHATS MY IP?</h2>
        <p>Your IP: {ip}</p>
        <p>Location: {location.city}</p>
        <p>Country: {countryInfo.name}</p>
        <img src={countryInfo.flag} alt={countryInfo.name} width='50' />
        <p>Capital: {countryInfo.capital}</p>
        <p>Population: {countryInfo.population}</p>

        <MapContainer
          center={[location.lat, location.lng]}
          zoom={12}
          style={{
            height: '400px',
            width: '100%',
            borderRadius: '15px',
            border: '2px solid red',
          }}
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[location.lat, location.lng]}>
            <Popup>Provider: {isp}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Level2;

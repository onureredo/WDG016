import { useState, useEffect } from 'react';
import axios from 'axios';

function Level1() {
  const [ip, setIp] = useState('');

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchIP();
  }, []);

  //   console.log(import.meta.env.VITE_IPIFY_API_KEY);

  return (
    <>
      <h2>Your IP Address: {ip}</h2>
    </>
  );
}

export default Level1;

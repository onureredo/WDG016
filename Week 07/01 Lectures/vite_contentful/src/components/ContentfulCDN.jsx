import { useState, useEffect } from 'react';
import axios from 'axios';

function ContentfulCDN() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const response = await axios.get(
        //   'https://cdn.contentful.com/spaces/22o80r3chpjd/environments/master/entries?access_token=nRXiDfnL2oToKVO7_59GIVbJ1AB-1fJaNII3e7R3a6A'
        // );
        const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
        const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
        const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`;
        const response = await axios.get(url);
        console.log(response);
        setEntries(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {entries.map((entry) => {
        return (
          <div key={entry.sys.id}>
            <h2>{entry.fields.title}</h2>
            {/*           
            {entry.fields.image && entry.fields.image.fields.file && (
              <img
                src={entry.fields.image.fields.file.url}
                alt={entry.fields.title}
                width='50%'
              />
            )} */}
            <p>{entry.fields.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ContentfulCDN;

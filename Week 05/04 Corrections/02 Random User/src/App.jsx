import { useState, useEffect } from 'react';
import Instructions from './instructions/Instructions';
import User from './components/User';
import axios from 'axios';
import './styles.css';
import Level3 from './components/Level3';

export default function App() {
  const [users, setUsers] = useState([]);

  // Abort Controller
  useEffect(() => {
    // hier erstellen wir das AbortController-Objekt, das es uns ermöglicht, die fetch-Anfrage abzubrechen.
    const controller = new AbortController();
    // hier holen wir das Signal aus dem Controller, das wir später zum Abbrechen der Anfrage nutzen.
    const signal = controller.signal;

    // Netzwerkanfrage mit fetch, und übergeben das Abbruchsgnal
    fetch('https://randomuser.me/api/?results=10', { signal })
      .then((response) => {
        // Hier überprüfen wir, ob die Antwort des Servers in Ordnung ist
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        // Die Antwort des Servers ist in Ordnung, also konvertieren wir sie in ein JSON-Objekt.
        return response.json();
      })
      .then((data) => {
        // Wir haben die Daten erhalten und aktualisieren unseren  Statemit den neuen Benutzerdaten.
        setUsers(data.results);
      })
      .catch((error) => {
        // Fehler nur loggen, wenn es kein Abbruchfehler ist
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });

    // Das ist die cleanup Funktion von useEffect, die aufgerufen wird, wenn die Komponente unmontiert wird.
    return () => {
      // Hier senden wir das Signal, um die Netzwerkanfrage abzubrechen.
      controller.abort();
    };
  }, []);

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <Level3 />
        {users.map((user) => (
          <User key={user.login.uuid} {...user} />
        ))}
      </div>
    </div>
  );
}

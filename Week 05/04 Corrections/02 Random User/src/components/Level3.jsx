import React from 'react';

function Level3() {
  return (
    <div>
      <ul>
        <li>
          Also in Level 3 müssen wir sicherstellen, dass unsere Netzwerkanfrage
          abgebrochen wird, falls unsere Komponente unerwartet entfernt wird,
          bevor die Antwort von der API zurückkommt.
        </li>
        <li>
          Das verhindert, dass unser Code versucht, den State einer nicht mehr
          existierenden Komponente zu aktualisieren, was zu Fehlern führen kann.
        </li>
        <li>
          Dazu verwenden wir den AbortController, eine Web-API, die das
          Abbrechen von fetch-Anfragen ermöglicht.
        </li>
      </ul>
    </div>
  );
}

export default Level3;

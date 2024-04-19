const Level2 = () => {
  return (
    <>
      <h4>Maps with React Leaflet</h4>
      <ul>
        <li>
          Some libraries depend on other libraries to work. Read React Leaftlets
          documentation carefully to understand what needs to be installed.
        </li>
        <li>
          Once all libraries are installed, create a file named <b>MyMap.js</b>
        </li>
        <li>
          In this file, use React Leaflet to create a map. It should also have a
          pin at a location of your choosing. The documentation also explains
          how to customize your map.
          <ul>
            <li>
              You component MyMap should be given two props: <i>lng</i> and
              <i>lat</i>
            </li>
            <li>
              Render this map inside one of the tabs created with react-tabs,
              using the given props to center both map and pin.
            </li>
            <li>
              <p>React Leaflet Stylesheet</p>
              <p>
                <em>import 'leaflet/dist/leaflet.css';</em>
              </p>
              <p>
                <em>import icon from 'leaflet/dist/images/marker-icon.png';</em>
              </p>
              <p>
                <em>
                  import iconShadow from
                  'leaflet/dist/images/marker-shadow.png';
                </em>
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level2;

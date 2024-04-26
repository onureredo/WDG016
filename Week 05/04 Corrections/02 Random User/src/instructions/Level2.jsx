const Level2 = () => {
  return (
    <>
      <h4>Passing down props</h4>
      <ul>
        <li>
          Everytime we render a list, we need to make sure every node is unique
          by passing a special prop called <code>key</code>
        </li>
        <li>Make sure every User component is rendering the data correctly</li>
        <li>
          The Contact component needs data too, pass down the necessary data
          using props!
        </li>
      </ul>
    </>
  );
};

export default Level2;

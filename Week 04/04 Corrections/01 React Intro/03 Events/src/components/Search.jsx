const Search = () => {
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      placeholder='Search...'
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default Search;

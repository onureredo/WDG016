function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('The form was submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text'>Text:</label>
      <input id='text' onChange={(e) => console.log(e.target.value)} />
      <button onClick={() => console.log('Loggin in')}>Submit</button>
    </form>
  );
}

export default Form;

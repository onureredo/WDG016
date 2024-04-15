const CreatePost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onClick={() => console.log('Input selected')}
        placeholder='UserName'
        name='username'
      />
      <textarea
        onClick={() => console.log('TextArea selected')}
        cols='50'
        rows='10'
        placeholder='Blog post'
        name='blogPost'
      ></textarea>
      <button>Post!</button>
    </form>
  );
};

export default CreatePost;

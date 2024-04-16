import Contact from './Contact';

const User = () => {
  return (
    <div className='userProfile'>
      <img src='' alt='name' />
      <div>
        <p>Name: </p>
        <p>Age: </p>
        <Contact />
      </div>
    </div>
  );
};

export default User;

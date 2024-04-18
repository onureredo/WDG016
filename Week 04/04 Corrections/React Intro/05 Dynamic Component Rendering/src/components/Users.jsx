import Contact from './Contact';

const User = ({ user }) => {
  const { picture, name, age, ...contactInfo } = user;

  return (
    <div className='userProfile'>
      <img src={user.picture} alt='name' />
      <div>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <Contact {...contactInfo} />
      </div>
    </div>
  );
};

export default User;

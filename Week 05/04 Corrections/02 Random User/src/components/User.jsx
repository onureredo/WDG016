import Contact from './Contact';

const User = ({ name, dob, picture, ...rest }) => {
  return (
    <div className='userProfile'>
      <img
        src={picture.large}
        alt={`${name.title} ${name.last}, ${name.first}`}
      />
      <div>
        <p>Name:{` ${name.title}. ${name.last}, ${name.first}`}</p>
        <p>Age: {dob.age} </p>
        <Contact {...rest} />
      </div>
    </div>
  );
};

export default User;

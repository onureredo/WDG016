const Contact = ({ email, phone, location, login }) => {
  return (
    <>
      <p>
        Address:
        {`${location.street.number} ${location.street.name}, ${location.postcode} ${location.city}`}
      </p>
      <p>Email:{email} </p>
      <p>Phone number: {phone} </p>
      {/* <p>Username: {login.username} </p> */}
    </>
  );
};

export default Contact;

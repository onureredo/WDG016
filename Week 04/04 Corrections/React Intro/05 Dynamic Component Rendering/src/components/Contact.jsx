const Contact = ({ email, phone, address }) => {
  return (
    <>
      <p>Address: {address}</p>
      <p>Email: {email} </p>
      <p>Phone number: {phone} </p>
    </>
  );
};

export default Contact;

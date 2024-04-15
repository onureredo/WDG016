// const SuperButton = () => {
//   return (
//     <button onClick={() => alert('I have been clicked!')}>Change me</button>
//   );
// };

// export default SuperButton;

function SuperButton({ text, alertText }) {
  const handleClick = () => {
    alert(alertText);
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default SuperButton;

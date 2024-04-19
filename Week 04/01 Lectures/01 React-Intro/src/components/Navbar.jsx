import WelcomeMessage from './WelcomeMessage';

function Navbar() {
  const isLoggedIn = false;
  const userName = 'Peter Parker';

  return (
    <div>
      <h2>Navbar Component</h2>
      <WelcomeMessage isLoggedIn={isLoggedIn} userName={userName} />
    </div>
  );
}

export default Navbar;

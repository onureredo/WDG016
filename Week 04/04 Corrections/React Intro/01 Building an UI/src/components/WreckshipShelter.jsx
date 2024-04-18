import Cats from './Cats';
import Dogs from './Dogs';
import Form from './Form';

function WreckshipShelter() {
  return (
    <>
      <div className='block'>
        <h2>Wreckship Shelter</h2>
        <p>
          In our beautiful shelter we have lots of animals with quirky qualities
          to them. Are you in search of a challenge? Here you can find the
          perfect animal for you!
        </p>

        <Cats />
        <Dogs />
        <Form />
      </div>
      ;
    </>
  );
}

export default WreckshipShelter;

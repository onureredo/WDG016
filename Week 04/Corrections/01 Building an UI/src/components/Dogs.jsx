import dog1 from '../assets/dog.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import Card from './Card';

function Dogs() {
  const dogs = ['Tabby', 'Billy', 'Leila'];
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);
  return (
    <>
      <section className='animalContainer'>
        <h3>Adopt a Dog!</h3>
        <div className='cardsContainer'>
          <div className='card'>
            <img src={dog1} alt={dogs[0]} />
            <h4>{dogs[0]}</h4>
            <p>
              Tabby is the perfect combination between sweet and protective.
              This {age()} year old dog will give you loads of love, but it will
              also protect your house from the mailman like nobodys business, so
              you will never receive unwanted mail again (or any other kind).
              She enjoys the ocasional fetch ball game, but in general she would
              rather eat your shoes or dig a hole where you just planted that
              new Gardenia. Take her with you back home!
            </p>
          </div>
          <div className='card'>
            <h4>{dogs[1]}</h4>
            <img src={dog2} alt={dogs[2]} />
            <p>
              {dogs[1]} is a lovig companion who is {age()} yers old. Take it
              home!
            </p>
          </div>
          <div className='card'>
            <h4>{dogs[2]}</h4>
            <img src={dog3} alt={dogs[3]} />
            <p>
              {dogs[2]} is a lovig companion who is {age()} yers old. Take it
              home!
            </p>
          </div>
          <div className='bonus'>
            <h1>BONUS PART</h1>
            <Card src={dog1} name={dogs[0]} age={age()} />
            <Card src={dog2} name={dogs[1]} age={age()} />
            <Card src={dog3} name={dogs[2]} age={age()} />
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Dogs;

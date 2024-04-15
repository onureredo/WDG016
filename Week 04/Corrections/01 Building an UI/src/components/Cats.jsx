import cat1 from '../assets/cat.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import Card from './Card';

function Cats() {
  const cats = ['Tom', 'Olly', 'Oreo'];
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);

  return (
    <>
      <section className='animalContainer'>
        <h3>Adopt a Cat!</h3>
        <div className='cardsContainer'>
          <div className='card'>
            <img src={cat1} alt={cats[0]} />
            <h4>{cats[0]}</h4>
            <p>
              {cats[0]} is a really beautiful cat, with a lot of sass and
              snuggles to give. He is {age()} years old and is looking for a nap
              companion during those tough winter months. He is very self
              sufficient, and is able to find a snack wherever he goes. No food
              at hand? Not a problem, he will figure out how to open your trash
              and invite himself to the delicious leftovers of that dinner you
              never finished! And if something falls on the floor, it will be
              gone before you can count to three! Take him back home with you!
            </p>
          </div>
          <div className='card'>
            <img src={cat2} alt={cats[1]} />
            <h4>{cats[1]}</h4>
            <p>
              {cats[1]} is a charming older cat with {age()} years on her back.
              She is calm and moves about as if she owns the place. She is
              friendly with younger cats and kids, until a darn youngster tries
              to take her out of her cool. She dislikes being picked up and will
              let you know just how much she dislikes it if you try to, so best
              to leave her to her own antics. Olly really likes to nibble on
              feet at night so make sure to wear thick socks while sleeping!
              Take her back home with you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cats;

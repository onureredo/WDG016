import Instructions from './instructions/Instructions';
import './styles.css';

export default function App() {
  // The following three variables can be moved to different files
  // as you progress through the exercise.
  // const cats = ['Tom', 'Olly', 'Oreo'];
  // const dogs = ['Tabby', 'Billy', 'Leila'];
  // const age = () => Math.floor(Math.random() * (10 - 1) + 1);

  return (
    <>
      <Instructions />
      <div className='block'>
        <h2>Wreckship Shelter</h2>
        <p>
          In our beautiful shelter we have lots of animals with quirky qualities
          to them. Are you in search of a challenge? Here you can find the
          perfect animal for you!
        </p>
        <section className='animalContainer'>
          <h3>Adopt a Cat!</h3>
          <div className='cardsContainer'>
            <div className='card'>
              <img
                src='https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*'
                alt='Tom'
              />
              <h4>Tom</h4>
              <p>
                Tom is a really beautiful cat, with a lot of sass and snuggles
                to give. He is 2 years old and is looking for a nap companion
                during those tough winter months. He is very self sufficient,
                and is able to find a snack wherever he goes. No food at hand?
                Not a problem, he will figure out how to open your trash and
                invite himself to the delicious leftovers of that dinner you
                never finished! And if something falls on the floor, it will be
                gone before you can count to three! Take him back home with you!
              </p>
            </div>
            <div className='card'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboCkjXUKztIj7P8a5UjeFn0lAMQSp_TqhQ&usqp=CAU'
                alt='Olly'
              />
              <h4>Olly</h4>
              <p>
                Olly is a charming older cat with 11 years on her back. She is
                calm and moves about as if she owns the place. She is friendly
                with younger cats and kids, until a darn youngster tries to take
                her out of her cool. She dislikes being picked up and will let
                you know just how much she dislikes it if you try to, so best to
                leave her to her own antics. Olly really likes to nibble on feet
                at night so make sure to wear thick socks while sleeping! Take
                her back home with you!
              </p>
            </div>
          </div>
        </section>

        <section className='animalContainer'>
          <h3>Adopt a Dog!</h3>
          <div className='cardsContainer'>
            <div className='card'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq8XOIHZips8a8a2r6TVcR7bYl3-hDVgrUw&usqp=CAU'
                alt='Tabby'
              />
              <h4>Tabby</h4>
              <p>
                Tabby is the perfect combination between sweet and protective.
                This 3 year old dog will give you loads of love, but it will
                also protect your house from the mailman like nobodys business,
                so you will never receive unwanted mail again (or any other
                kind). She enjoys the ocasional fetch ball game, but in general
                she would rather eat your shoes or dig a hole where you just
                planted that new Gardenia. Take her with you back home!
              </p>
            </div>
          </div>
        </section>

        <section className='formContainer'>
          <h2>Do you want to adopt?</h2>
          <form className='form'>
            <div>
              <label>Your Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name'
              />
            </div>
            <div>
              <label>Email</label>
              <input type='email' name='email' id='email' placeholder='Email' />
            </div>
            <div>
              <label>Pet</label>
              <input type='text' name='pet' id='pet' placeholder="Pet's name" />
            </div>
            <div className='textarea'>
              <label>Who are you?</label>
              <textarea
                type='text'
                name='animal-name'
                id='animal-name'
                placeholder='Let us know a bit about yourself and your situation,
                and we will get back to you as soon as possible to start the
                adoption process!'
                rows='7'
                cols='50'
              ></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </section>
      </div>
    </>
  );
}

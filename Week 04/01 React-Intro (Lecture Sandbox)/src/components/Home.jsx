import Dynamic from './Dynamic';
import Form from './Form';
import Navbar from './Navbar';
import Products from './Products';

function Home() {
  return (
    <>
      <Navbar />
      <Products
        title='Amazon Echo'
        description='Your AI Assistant'
        price='49,99'
      />
      <Form />
      <Dynamic />
    </>
  );
}

export default Home;

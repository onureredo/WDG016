import { useState, useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/posts');
        // console.log(response);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  // if (loading) {
  //   return (
  //     <div className='h-screen flex justify-center'>
  //       <SpinnerCircular
  //         size={75}
  //         thickness={100}
  //         speed={100}
  //         color='rgba(57, 117, 172, 1)'
  //         secondaryColor='rgba(0, 0, 0, 0.44)'
  //       />
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className='h-screen flex justify-center text-red-500'>
        <p>Server not available, try again later</p>
      </div>
    );
  }

  return (
    <div className='flex justify-center flex-wrap my-4'>
      {posts.map((post) => {
        const formattedDate = post.date
          ? format(new Date(post.date), 'dd MMMM yyyy, @HH:mm')
          : '';

        return (
          <div
            className='lg:w-1/4 h-full m-4 border-2 border-slate-50 rounded-xl shadow-xl shadow-gray-500'
            key={post._id}
          >
            <div className='m-4 flex flex-col'>
              <h2 className='text-3xl font-semibold mb-4 text-center'>
                {post.title}
              </h2>
              <img src={post.image} alt={post.title} />
              <p className='my-4'>{post.content}</p>
              <p>
                <Link className='text-blue-500 hover:underline' to='/'>
                  @{post.author ? post.author.username : 'Unknown User'}
                </Link>{' '}
                &middot; {formattedDate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

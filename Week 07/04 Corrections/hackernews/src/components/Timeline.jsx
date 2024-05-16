import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { SpinnerDotted } from 'spinners-react';

function Timeline() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://hn.algolia.com/api/v1/search?query=${searchTerm}&hitsPerPage=10&page=${page}`
        );
        // console.log(response);
        setArticles(response.data.hits);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, page]);

  return (
    <div className='timelineContainer'>
      <Navbar onSearch={setSearchTerm} />
      {isLoading ? (
        <div className='loading-spinner'>
          <SpinnerDotted
            size={90}
            thickness={100}
            speed={100}
            color='#ff6600'
          />
        </div>
      ) : (
        <ol className='articleList'>
          {articles.map((article) => (
            <li key={article.objectID} className='articleItem'>
              <h3 className='articleHeader'>
                {article.title}
                <br />
                <a href={article.url} target='_blank' className='articleLink'>
                  go to Article
                </a>
              </h3>
              <p>
                {article.points} points | {article.num_comments} comments
              </p>
              <p>
                posted by{' '}
                <a href='' className='articleAuthor'>
                  {article.author}
                </a>
              </p>
            </li>
          ))}
        </ol>
      )}
      <div className='pagination'>
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={articles.length < 10}
        >
          Next
        </button>
      </div>
      {error && <p className='errorMessage'>{error}</p>}
    </div>
  );
}

export default Timeline;

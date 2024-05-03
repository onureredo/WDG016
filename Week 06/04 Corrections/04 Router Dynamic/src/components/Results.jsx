import { useParams } from 'react-router-dom';

function Results() {
  const { name } = useParams();

  return <div>Hello {name} </div>;
}

export default Results;

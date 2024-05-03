import { useParams } from 'react-router-dom';

function Student() {
  const { id } = useParams();

  return <div>Hello {id} </div>;
}

export default Student;

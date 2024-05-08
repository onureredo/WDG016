import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleStudent } from '../services/students';

function StudentDetail() {
  const [student, setStudent] = useState(null);
  const { uuid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await getSingleStudent(uuid);
        setStudent(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudent();
  }, [uuid]);

  const goBack = () => {
    alert('Going back to student list');
    navigate('/students');
  };

  if (!student) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <h2>{`${student.name.first} ${student.name.last}`}</h2>
      <img id='s-pic' src={student.picture.large} alt={student.name.first} />
      <p>
        Address:{student.location.street.name}. {student.location.street.number}
        , {student.location.city}
      </p>
      <p>Email: {student.email}</p>
      <button onClick={goBack}>Go Back</button>
    </>
  );
}

export default StudentDetail;

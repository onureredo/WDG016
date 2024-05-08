import { useState, useEffect } from 'react';
import { getStudents } from '../services/students';
import { Link } from 'react-router-dom';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await getStudents(5);
      setStudents(response);
    };

    fetchStudents();
  }, []);

  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.login.uuid}>
            <Link
              to={`/students/${student.login.uuid}`}
            >{`${student.name.first} ${student.name.last}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Students;

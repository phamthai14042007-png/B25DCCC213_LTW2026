import StudentItem from './StudentItem';

const StudentList = ({ students, onDelete }) => {
  return (
    <div>
      {students.map((student) => (
      <StudentItem 
      key={student.id} 
      student={student}
      onDelete={onDelete} 
      />
      ))}
    </div>
  );
};

export default StudentList;
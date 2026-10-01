import { useState } from 'react';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', score: 8.5, class: 'UDU04' },
    { id: 2, name: 'Tran Thi B', score: 7.0, class: 'UDU02' },
    { id: 3, name: 'Le Van C', score: 9.2, class: 'UDU01' },
    { id: 4, name: 'Pham Thi D', score: 8.0, class: 'UDU03' },
  ]);
  
  const [newName, setNewName] = useState('');
  const [newScore, setNewScore] = useState('');
  const [newClass, setNewClass] = useState('');
  const [filter, setFilter] = useState('all');
  
  
  const handleAddStudent = () => {
    const score = Number(newScore);

    if (
      newName.trim() === '' ||
      newClass.trim() === '' ||
      newScore === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    if (score < 0 || score > 10) {
      alert('Điểm phải nằm trong khoảng từ 0 đến 10!');
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: newName,
      score: score,
      class: newClass,
    };

    setStudents([...students, newStudent]);

    setNewName('');
    setNewScore('');
    setNewClass('');
  };
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  const filteredStudents = students.filter((student) => {
  if (filter === 'good') {
    return student.score >= 8;
  }

  if (filter === 'fail') {
    return student.score < 5;
  }

  return true;
});
const totalStudents = students.length;

const totalScore = students.reduce(
  (total, student) => total + student.score,
  0
);

const averageScore =
  totalStudents > 0 ? (totalScore / totalStudents).toFixed(2) : 0;


  return (
  <div>
    <h1>Quản lý điểm sinh viên</h1>

    <div>
  <h2>Thêm sinh viên</h2>

  <input
    type="text"
    placeholder="Họ tên"
    value={newName}
    onChange={(e) => setNewName(e.target.value)}
  />

  <input
    type="number"
    placeholder="Điểm"
    value={newScore}
    onChange={(e) => setNewScore(e.target.value)}
  />

  <input
    type="text"
    placeholder="Lớp"
    value={newClass}
    onChange={(e) => setNewClass(e.target.value)}
  />

  <button onClick={handleAddStudent}>
    Thêm
  </button>
</div>

<div>
  <button onClick={() => setFilter('all')}>
    Tất cả
  </button>

  <button onClick={() => setFilter('good')}>
    Giỏi
  </button>

  <button onClick={() => setFilter('fail')}>
    Trượt
  </button>
</div>


<div>
  <p>Tổng số sinh viên: {totalStudents}</p>
  <p>Điểm trung bình: {averageScore}</p>
</div>

  <StudentList
    students={filteredStudents}
    onDelete={handleDeleteStudent}
  />    
  </div>
);
};

export default App;
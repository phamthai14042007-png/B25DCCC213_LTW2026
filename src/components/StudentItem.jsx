const StudentItem = ({ student, onDelete }) => {
  const { id, name, score, class: studentClass } = student;

  return (
    <div>
      <p>Mã sinh viên: {id}</p>
      <p>Họ tên: {name}</p>
      <p>Điểm: {score}</p>
      <p>Lớp: {studentClass}</p>

      <button onClick={() => onDelete(id)}>
        Xoá
      </button>
      <hr />
    </div>
  );
};

export default StudentItem;
const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  //write your code
  const filters = {
    name: req.query.name,
    className: req.query.class,
    section: req.query.section,
    roll: req.query.roll,
  };

  const students = await getAllStudents(filters);
  res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  //write your code
  const payload = req.body;
  const message = await addNewStudent(payload);
  res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  //write your code
  const { id: userId } = req.params;
  const payload = req.body;
  const message = await updateStudent({ ...payload, userId });
  res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  //write your code
  const { id } = req.params;
  const student = await getStudentDetail(id);
  res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  //write your code
  const payload = req.body;
  const { id: userId } = req.params;
  const { id: reviewerId } = req.user;
  const message = await setStudentStatus({ ...payload, userId, reviewerId });
  res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};

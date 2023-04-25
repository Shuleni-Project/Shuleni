import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function AttendancePage() {
  const { classId } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students?class=${classId}')
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err));
  }, [classId]);

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetch(`/api/attendance?class=${classId}`)
      .then((res) => res.json())
      .then((data) => setAttendance(data))
      .catch((err) => console.log(err));
  }, [classId]);

  const handleAttendanceChange = (studentId, date, attended) => {
    const updatedAttendance = attendance.slice();
    const index = updatedAttendance.findIndex(
      (a) => a.student_id === studentId && a.date === date
    );
    if (index !== -1) {
      updatedAttendance[index].attended = attended;
      setAttendance(updatedAttendance);
      fetch(`/api/attendance/${updatedAttendance[index].id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAttendance[index]),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    } else {
      const newAttendance = {
        student_id: studentId,
        date: date,
        attended: attended,
      };
      setAttendance([...attendance, newAttendance]);
      fetch(`/api/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAttendance),
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }
  };

  const classAttendance = attendance.reduce((acc, a) => {
    if (acc[a.date]) {
      acc[a.date] += a.attended ? 1 : 0;
    } else {
      acc[a.date] = a.attended ? 1 : 0;
    }
    return acc;
  }, {});

  const data = Object.keys(classAttendance).map((date) => ({
    date: date,
    attended: classAttendance[date],
    total: students.length,
  }));

  return (
    <div>
      <h1>Attendance for Class {classId}</h1>
      <table>
        <thead>
          <tr>
            <th>full_name</th>
            <th>Email</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.full_name}</td>
              <td>{student.email}</td>
              <td>
              <select>
  {students.map((a) => (
    <option key={a.id} value={a.id} selected={a.student_id === student.id}>
      {a.name}
    </option>
  ))}
</select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="attended" fill="#8884d8" />
        <Bar dataKey="total" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
export default AttendancePage;
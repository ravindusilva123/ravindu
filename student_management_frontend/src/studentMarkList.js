import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentMarkList() {
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        axios.get('/api/marks/').then(response => setMarks(response.data));
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                    <th>Total Marks</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                {marks.map(mark => (
                    <tr key={mark.id}>
                        <td>{mark.student_id}</td>
                        <td>{mark.subject}</td>
                        <td>{mark.marks_obtained}</td>
                        <td>{mark.total_marks}</td>
                        <td>{mark.percentage.toFixed(2)}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentMarkList;

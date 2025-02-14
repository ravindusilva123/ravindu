import React, { useState } from 'react';
import axios from 'axios';

function MarksEntry() {
    const [formData, setFormData] = useState({ student_id: '', subject: '', marks_obtained: '', total_marks: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/marks/', formData).then(response => alert('Marks added successfully'));
    };

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <input type="text" name="student_id" placeholder="Student ID" onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
            <input type="number" name="marks_obtained" placeholder="Marks Obtained" onChange={handleChange} required />
            <input type="number" name="total_marks" placeholder="Total Marks" onChange={handleChange} required />
            <button type="submit" className="btn btn-primary">Add Marks</button>
        </form>
    );
}

export default MarksEntry;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarkEdit({ markId }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        axios.get(`/api/marks/${markId}/`).then(response => setFormData(response.data));
    }, [markId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/marks/${markId}/`, formData).then(() => alert('Marks updated successfully'));
    };

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            <input type="number" name="marks_obtained" value={formData.marks_obtained} onChange={handleChange} />
            <input type="number" name="total_marks" value={formData.total_marks} onChange={handleChange} />
            <button type="submit" className="btn btn-success">Update Marks</button>
        </form>
    );
}

export default MarkEdit;

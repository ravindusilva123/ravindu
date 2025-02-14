import React from 'react';
import axios from 'axios';

function MarksDelete({ markId, onDelete }) {
    const handleDelete = () => {
        axios.delete(`/api/marks/${markId}/`).then(() => {
            alert('Marks deleted successfully');
            onDelete();
        });
    };

    return <button onClick={handleDelete} className="btn btn-danger">Delete</button>;
}

export default MarksDelete;
import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    let { id } = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
};

export default Project;
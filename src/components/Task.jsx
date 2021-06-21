import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Note = ({ id, task, deleteTask }) => {
    return (
        <article className="task">
            <p className="task__task">{task}</p>
            <AiFillCloseCircle
                className="deleteBtn"
                onClick={(e) => deleteTask(e, id)}
            />
        </article>
    );
};

export default Note;

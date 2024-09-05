/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggleTodo }) => {
    return (
        <div className="flex items-center my-3 gap-2">
            {/* Toggling the complete state */}
            <div
                onClick={() => toggleTodo(id)}
                className="flex flex-1 items-center cursor-pointer transition-all duration-300 ease-in-out"
            >
                <img
                    className="w-7"
                    src={isComplete ? tick : not_tick}
                    alt={isComplete ? "Task complete" : "Task incomplete"}
                />
                <p
                    className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through text-slate-500" : ""} transition-colors duration-300`}>
                        {text}
                </p>
            </div>

            {/* Delete button */}
            <img
                onClick={() => deleteTodo(id)}
                src={delete_icon}
                alt="Delete task"
                className="w-3.5 cursor-pointer hover:scale-110 transition-transform duration-300"
            />
        </div>
    );
};

export default TodoItems;

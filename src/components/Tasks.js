import React, { useState } from 'react';
import Task from './Task';


function Tasks() {
    const [taskList, setTask]= useState( [
      {id: 1, text: "Atsikelti", status: false},
      {id: 2, text: "Pasimokinti", status: false},
      {id: 3, text: "Naujo ismokti", status: false},
      {id: 4, text: "Sportas", status: false},
      {id: 5, text: "Laikas seimai", status: false},
      {id: 6, text: "Uzmigti", status: false}]);

function statusChange(id){
    const updateTasks= [...taskList];
    updateTasks.forEach((task) => {
        if (task.id === id){
            task.status = true;
        }
    });
    setTask(updateTasks);
}

function deleteTask(id){
    setTask(taskList.filter((item) => item.id !== id));
}

    const tasks = taskList.map( (task) => {
        return (
            <Task
            key={task.id}
            id={task.id}
            text={task.text}
            status={task.status}
            statusChange={statusChange}
            deleteTask={deleteTask}
            />
        )
    })


    return (
        <div>
            <h1>TO DO LIST</h1>
            {tasks}</div>
    )
};

export default Tasks;
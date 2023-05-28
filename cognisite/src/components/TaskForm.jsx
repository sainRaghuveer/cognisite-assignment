import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === '') {
      return;
    }

    let obj={
        title:task,
        status:false
    }
    // Call the addTask function to add the task to the list
    addTask(obj);

    // Reset the form field
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <Input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      </label>
      <br />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;

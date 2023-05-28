import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from "../styles/Taskform.module.css"

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === '') {
            return;
        }

        let obj = {
            title: task,
            status: false
        }
        // Call the addTask function to add the task to the list
        addTask(obj);

        // Reset the form field
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box className={styles.container}>
                <Box className={styles.myinput}>
                    <Input type="text" value={task} placeholder='Add new task here..' onChange={(e) => setTask(e.target.value)} />
                    <Button type="submit">Add Task</Button>
                </Box>  
            </Box>
        </form>
    );
};

export default TaskForm;

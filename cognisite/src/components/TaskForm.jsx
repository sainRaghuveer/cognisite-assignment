import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import styles from "../styles/Taskform.module.css";
import { Spinner } from '@chakra-ui/react';

const TaskForm = ({ addTask, loading }) => {
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
                    <Button type="submit" isDisabled={loading}>{loading?<Spinner/>:"Add Task"}</Button>
                </Box>  
            </Box>
        </form>
    );
};

export default TaskForm;

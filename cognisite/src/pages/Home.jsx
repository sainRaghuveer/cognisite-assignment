import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch the task list from the server
        const fetchTasks = async () => {
            try {
                const response = await fetch('https://mock-serverfor-mock6.onrender.com/list');
                if (response.ok) {
                    const data = await response.json();
                    setTasks(data);
                } else {
                    console.log('Failed to fetch tasks');
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (newTask) => {
        try {
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if (response.ok) {
                const data = await response.json();
                console.log("data", data)
                setTasks([...tasks, data]);
            } else {
                console.log('Failed to add task');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };
    return (
        <div>
            <TaskForm addTask={addTask} />
            <h1>Task List</h1>
            <TaskList tasks={tasks} />
        </div>
    )
}

export default Home
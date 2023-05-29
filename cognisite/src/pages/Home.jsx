import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm';
import { Spinner } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, []);

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

    const addTask = async (newTask) => {
        try {
            setLoading(true);
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
            setLoading(false);
            if (response.ok) {
                const data = await response.json();
                console.log("data", data)
                setTasks([...tasks, data]);
                toast({
                    title: `Task added successfully`,
                    status: "success",
                    isClosable: true,
                    position: "top"
                })
            } else {
                console.log('Failed to add task');
                toast({
                    title: `Failed to add task`,
                    status: "error",
                    isClosable: true,
                    position: "top"
                });
                setLoading(false);
            }
        } catch (error) {
            console.log('Error:', error);
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                position: "top"
            })
        }
        setLoading(false);
    };

    const handleDelete = async (el) => {
        let id = el.id;
        try {
            const response = await fetch(`https://mock-serverfor-mock6.onrender.com/list/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response) {
                toast({
                    title: `Task deleted successfully`,
                    status: "warning",
                    isClosable: true,
                    position: "top"
                })
            }
            fetchTasks();
        } catch (error) {
            console.log('Error:', error);
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                position: "top"
            })
        }
    };

    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <TaskForm addTask={addTask} loading={loading}/>
            <TableContainer style={{ width: "80%", margin: "auto", marginTop: "20px", color:"black" }}>
                <Table variant='simple'>
                    <TableCaption>All Task will be here</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Title</Th>
                            <Th>Status</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tasks.length > 0 && tasks.map((el, index) => (
                            <Tr key={index} style={{border:"1px solid black"}}>
                                <Td>{el.id}</Td>
                                <Td>{el.title}</Td>
                                <Td>{el.status ? "Pending" : "Completed"}</Td>
                                <Td><DeleteIcon onClick={() => handleDelete(el)} /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home
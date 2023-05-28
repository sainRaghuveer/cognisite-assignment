import React from 'react';
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
} from '@chakra-ui/react'

const TaskList = (tasks) => {
    console.log(tasks)
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>All Task will be here</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Title</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tasks.length > 0 && tasks.map((el, index) => (
                        <Tr key={index}>
                            <Td>{el.id}</Td>
                            <Td>{el.title}</Td>
                            <Td>{el.status?"Pending":"Completed"}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TaskList;

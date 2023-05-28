import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Signup.module.css"

const Signup = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name,
            mobile,
            password
        };
        console.log(user);

        try {
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/users');
            if (response.ok) {
                const users = await response.json();
                const isRegistered = users.some((u) => u.mobile === mobile);
                if (isRegistered) {
                    console.log('User is already registered');
                    // Reset the form fields
                    setName('');
                    setMobile('');
                    setPassword('');
                    return;
                }
            } else {
                console.log('Failed to fetch users');
            }
        } catch (error) {
            console.log('Error:', error);
        }
        // Send the user data to the server and store it in the JSON file

        try {
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            console.log("signupres", response)
            if (response.ok) {
                console.log('User registered successfully');
                navigate("/login");
                // Reset the form fields
                setName('');
                setMobile('');
                setPassword('');
            } else {
                console.log('Failed to register user');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <Text mb='8px'>Name:</Text>
                <Input style={{border:"1px solid gray"}} type="text" value={name} placeholder='Type your name..' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>
                    Mobile:
                    <Input style={{border:"1px solid gray"}} type="text" value={mobile} placeholder='Type your Mobile number..' onChange={(e) => setMobile(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <Input style={{border:"1px solid gray"}} type="password" value={password} placeholder='Type your password..' onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <Box style={{width:"50%", margin:"auto", textAlign:"center", marginTop:"50px"}}>
                <Button style={{backgroundColor:"teal"}} type="submit">Register</Button>
                </Box>
                <Box style={{ display: "flex", width: "80%", margin: "auto", justifyContent: "space-around", marginTop: "30px" }}>
                    <Text style={{marginTop:"7px"}}>If you already registered </Text>
                    <Button style={{backgroundColor:"teal"}} onClick={handleLogin}>Login here</Button>
                </Box>
            </form>
        </div>
    );
};

export default Signup;

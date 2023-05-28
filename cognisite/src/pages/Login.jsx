import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Signup.module.css"

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            mobile,
            password
        };

        // Send the login credentials to the server for authentication
        try {
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/users');
            if (response.ok) {
                const users = await response.json();
                const isRegistered = users.some((u) => u.mobile === mobile && u.password === password);
                if (isRegistered) {
                    sessionStorage.setItem("user", mobile)
                    console.log('User Logged in successfully');
                    navigate("/home");
                    // Reset the form fields
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
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>
                    Mobile:
                    <Input style={{ border: "1px solid gray" }} type="text" value={mobile} placeholder='Mobile number..' onChange={(e) => setMobile(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <Input style={{ border: "1px solid gray" }} type="password" value={password} placeholder='Password..' onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <Box style={{ width: "50%", margin: "auto", textAlign: "center", marginTop: "50px" }}>
                    <Button style={{backgroundColor:"teal"}} className={styles.btn} type="submit">Login</Button>
                </Box>
            </form>
        </div>
    );
};

export default Login;

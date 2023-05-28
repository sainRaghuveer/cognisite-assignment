import { Box, Button, FormControl, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Signup.module.css";
import { Spinner } from '@chakra-ui/react';

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            mobile,
            password
        };

        // Send the login credentials to the server for authentication
        try {
            setLoading(true);
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/users');
            if (response.ok) {
                setLoading(false);
                const users = await response.json();
                const isRegistered = users.some((u) => u.mobile === mobile && u.password === password);
                if (isRegistered) {
                    sessionStorage.setItem("user", mobile)
                    console.log('User Logged in successfully');
                    navigate("/home");
                    toast({
                        title: `User Logged in successfully`,
                        status: "success",
                        isClosable: true,
                        position: "top"
                    });
                    // Reset the form fields
                    setMobile('');
                    setPassword('');
                    return;
                }else{
                    toast({
                        title: `Check your password or phone number`,
                        status: "error",
                        isClosable: true,
                        position: "top"
                    });
                }
            } else {
                console.log('Failed to fetch users');
                toast({
                    title: `Failed to fetch users`,
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
            });
        }
        setLoading(false);
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
                    <Button style={{backgroundColor:"teal"}} className={styles.btn} type="submit">{loading?<Spinner/>:"Login"}</Button>
                </Box>
            </form>
        </div>
    );
};

export default Login;

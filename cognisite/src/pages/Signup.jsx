import { Box, Button, Heading, Input, Text, border, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Signup.css"
import { Spinner } from '@chakra-ui/react';

const Signup = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name,
            mobile,
            password
        };
        console.log(user);

        try {
            setLoading(true);
            if (user.name == "" || user.mobile == "" || user.password == "") {
                toast({
                    title: `Please fill all fields`,
                    status: "warning",
                    isClosable: true,
                    position: "top"
                });
                setLoading(false);
                return;
            }
            if (user.mobile.length < 10 || user.mobile.length > 10) {
                toast({
                    title: `Mobile number should be of 10 digits`,
                    status: "warning",
                    isClosable: true,
                    position: "top"
                });
                setLoading(false);
                return;
            }
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/users');
            setLoading(false);
            if (response.ok) {
                const users = await response.json();
                const isRegistered = users.some((u) => u.mobile === mobile);
                if (isRegistered) {
                    console.log('User is already registered');
                    // Reset the form fields
                    toast({
                        title: `User is already registered please login`,
                        status: "warning",
                        isClosable: true,
                        position: "top"
                    });
                    setName('');
                    setMobile('');
                    setPassword('');
                    return;
                }
            } else {
                console.log('Failed to fetch users');
                setLoading(false);
            }
        } catch (error) {
            console.log('Error:', error);
            setLoading(false);
        }
        // Send the user data to the server and store it in the JSON file

        try {
            setLoading(true);
            const response = await fetch('https://mock-serverfor-mock6.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            console.log("signupres", response)
            setLoading(false);
            if (response.ok) {
                console.log('User registered successfully');
                navigate("/login");
                toast({
                    title: `User registered successfully`,
                    status: "success",
                    isClosable: true,
                    position: "top"
                });
                // Reset the form fields
                setName('');
                setMobile('');
                setPassword('');
            } else {
                console.log('Failed to register user');
                toast({
                    title: `Failed to register user`,
                    status: "error",
                    isClosable: true,
                    position: "top"
                });
            }
        } catch (error) {
            console.log('Error:', error);
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                position: "top"
            })
            setLoading(false);
        }
    };

    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <div className="parent">

            <div className="container">
                <div style={{ width: "90%", margin: "auto" }}>
                    <Heading fontSize={"20px"}> Welcome to Task app you can Register here</Heading>
                    {loading?"Please wait while Register...":null}
                </div>
                <form onSubmit={handleSubmit}>
                    <Text mb='8px'>Name:</Text>
                    <Input type="text" value={name} placeholder='Type your name..' onChange={(e) => setName(e.target.value)} style={{ border: "1px solid black" }} />
                    <br />
                    <label>
                        Mobile:
                        <Input type="number" value={mobile} placeholder='Type your Mobile number..' onChange={(e) => setMobile(e.target.value)} style={{ border: "1px solid black" }} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <Input type="password" value={password} placeholder='Type your password..' onChange={(e) => setPassword(e.target.value)} style={{ border: "1px solid black" }} />
                    </label>
                    <br />
                    <Box style={{ width: "50%", margin: "auto", textAlign: "center", marginTop: "50px" }}>
                        <Button style={{ backgroundColor: "teal" }} type="submit" isDisabled={loading}>{loading ? <Spinner /> : "Register"}</Button>
                    </Box>
                    <Box style={{ display: "flex", width: "80%", margin: "auto", justifyContent: "space-between", marginTop: "30px", border: "1px solid black", borderRadius: "8px", backgroundColor: "#b4c4db" }}>
                        <Text style={{ marginTop: "7px" }}>If you already registered </Text>
                        <Button style={{ backgroundColor: "teal" }} onClick={handleLogin} isDisabled={loading}>Login</Button>
                    </Box>
                </form>
            </div>
        </div>
    );
};

export default Signup;

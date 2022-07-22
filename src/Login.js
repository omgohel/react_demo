import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';




export default function ValidationTextFields() {

    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [hobby, setHobby] = useState("")
    const [gender, setGender] = useState("")
    function handleSubmit() {
        console.log("User name: ", userName)
        console.log("Password: ", password)
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <h2>Login </h2>
            <div>
                <TextField
                    id="outlined-error"
                    label="User Name"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-error"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
            </div>
            
            <br />

            <div>
                <Button variant="contained" onClick={handleSubmit}>Login</Button>
            </div>


        </Box>
    );
}

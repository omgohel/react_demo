import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';




export default function ValidationTextFields() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [hobby, setHobby] = useState("")
    const [gender, setGender] = useState("")
    function handleSubmit() {
        console.log("First name: ", firstName)
        console.log("Last Name: ", lastName)
        console.log("Age: ", age)
        console.log("Address: ", address)
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
            <h2>Register </h2>
            <div>
                <TextField
                    id="outlined-error"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-error"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>

                <FormControl style={{ width: '435px' }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={(e) => setAge(e.target.value)}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={4}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <br />

            <div>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>


            <br />
            <br />
            <br />
            <br />
            <div>

                <table align="center">
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{age}</td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>Pranjal</td>
                            <td>Vaghela</td>
                            <td>24</td>
                            <td>Ahemdabad</td>
                        </tr>
                        <tr>
                            <td>Pranjal</td>
                            <td>Vaghela</td>
                            <td>24</td>
                            <td>Ahemdabad</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </Box>
    );
}

import React, { useEffect } from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const DistributorForm = ({ marginLeft, width, values, handleChange, setPage, page, userType, heading }) => {
    return (
        <React.Fragment>
            {heading()}

            <p>Name of the Company</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="Ray Ban" required>
            </OutlinedInput>
            <br /><br />

            <p>Name of the Owner</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="John Snow" required>
            </OutlinedInput>
            <br /><br />

            <p>Product Category</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="Ray Ban" required>
            </OutlinedInput>
            <br /><br />

            <p>GST IN</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="John Snow" required>
            </OutlinedInput>
            <br /><br />

            <p>Annual Turnover</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="Rs. 1.87 Cr" required>
            </OutlinedInput>
            <br /><br />

            <p>Phone Number</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                startAdornment={
                    <InputAdornment position="start">
                        +91
                    </InputAdornment>
                }
                inputProps={{ pattern: "[0-9]{10}" }} required>
            </OutlinedInput>
            <br /><br />

            <p>Email</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="Email"
                startAdornment={
                    <InputAdornment position="start">
                        <AlternateEmailIcon />
                    </InputAdornment>
                } required>
            </OutlinedInput>
            <br /><br />

            <p>Legal Status</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="@#$%" required>
            </OutlinedInput>
            <br /><br />

            <p>Target Areas</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                placeholder="@#$%" required>
            </OutlinedInput>
            <br /><br />

            {/* <p>Gender</p>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={values.gender}
                onChange={handleChange('gender')}
                style={{ width: '100%' }}
            >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
            <br /><br /> */}

            <p>Address</p>
            <TextField
                multiline
                rows={4}
                rowsMax={6}
                style={{ width: '100%' }}
            />
            <br /><br />
            
            <p>About the Firm</p>
            <TextField
                multiline
                rows={4}
                rowsMax={6}
                style={{ width: '100%' }}
            />
            <br /><br />

            <Button style={{
                background: "#0A66C2",
                color: 'white',
                textTransform: 'none',
                width: '100%',
                alignSelf: 'center',
                fontWeight: '500',
                fontSize: '30px',
                boxSizing: 'border-box',
                paddingTop: '10px'
            }}
                onClick={() => setPage(page + 1)}>
                Next
            </Button>
        </React.Fragment>
    )
}

export default DistributorForm

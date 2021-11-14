import React, { useEffect } from 'react'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const ManufacturerForm = ({ marginLeft, width, values, setValues, setPage, page, userType, heading }) => {
    const handleChange = (prop) => (event) => {
        setValues({...values, page4: {
            ...values.page4, ManufacturerForm: {
                ...values.page4.ManufacturerForm, [prop]: event.target.value
            }
        }}) 
    }

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
                onChange={handleChange('companyName')}
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
                onChange={handleChange('gst')}
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
                onChange={handleChange('productCategory')}
                placeholder="Ray Ban" required>
            </OutlinedInput>
            <br /><br />

            <p>Annual Turnover</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                onChange={handleChange('turnover')}
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
                onChange={handleChange('phone')}
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
                onChange={handleChange('email')}
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
                onChange={handleChange('legalStatus')}
                required>
            </OutlinedInput>
            <br /><br />

            <p>Main Markets</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                onChange={handleChange('mainMarkets')}
                required>
            </OutlinedInput>
            <br /><br />

            <p>Trademark</p>
            <OutlinedInput
                style={{
                    width: '100%',
                    background: 'white',
                    boxSizing: 'border-box'
                }}
                onChange={handleChange('trademark')}
                placeholder="1234567890" required>
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
                onChange={handleChange('address')}
                required
            />
            <br /><br />
            
            <p>About the Firm</p>
            <TextField
                multiline
                rows={4}
                rowsMax={6}
                style={{ width: '100%' }}
                onChange={handleChange('about')}
                required
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
                type="submit">
                Next
            </Button>
            <br /><br />
            
            <p className='loginText' style={{marginBottom: '2vh'}}>
                Want to Log in? <Link to='/login' style={{color: '#0A66C2'}}>Login</Link>
            </p>
        </React.Fragment>
    )
}

export default ManufacturerForm

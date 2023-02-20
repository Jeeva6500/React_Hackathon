// import React from 'react'
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import YupPassword from 'yup-password'
YupPassword(yup)

export default function Register() {

    const nav = useNavigate();
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [err, setErr] = useState('');
    const [open, setOpen] = useState(false);
    const [exist, setExist] = useState('');

    const handleClose = () => {
        setOpen(false)
        nav('/login')
        return;
    }

    const action = (
        <React.Fragment>
            <IconButton size='small' color='inherit' onClick={handleClose}>
                <CloseIcon></CloseIcon>
            </IconButton>
        </React.Fragment>
    )

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            name: '',
            address: '',
            phone: '',
            account: ''

        },
        onSubmit: values => {
                                    axios.post('http://localhost:8080/api/user/add', values)
                                        .then(result => {
                                            //this.setState({setExist:result.data})
                                            //console.log("else executed");
                                            setOpen(true)
                                        })
                                        .catch(error => {
                                            console.log(error);
                                            setError(error.response.data)});
                                    
        },
        validationSchema: yup.object().shape({
            username: yup.string().email('Enter valid email id').required('Username cannot be blank'),
            password: yup.string().password("Password should be minimum 8 characters").required('Password cannot be blank'),
            name: yup.string().required('Name cannot be blank'),
            address: yup.string(),
            phone: yup.string().min(10).max(10, "Enter valid phone number").required('Phone number cannot be blank'),
            account: yup.string().min(12).max(12, "Enter valid 12 digit account number").required('Account number cannot be blank'),

        })
    })

    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className='card'>
                        <div className="text-white  mb-2 p-2 rounded text-center" style={{ background: "indigo" }}>
                            <h4>Tell us about you</h4>
                            {
                                err != '' ? <span className='text-center alert alert-danger'>{error}</span> : <span></span>
                            }
                        </div>
                        <span className='text-center text-danger'>{error}</span> <br></br>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="row">
                                <div className="col text-center mb-2">
                                    {
                                        formik.errors.username && formik.touched.username ?
                                            <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                                                name='username' id="username" error
                                                label="Username"
                                                helperText={formik.errors.username}
                                            /> : <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='username' id="username" label="Username*" variant="outlined" />
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center mb-2">
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' id="password" type="password" label="Password*" variant="outlined" />
                                    {
                                        formik.errors.password && formik.touched.password ?
                                            <p className='text-danger'>{formik.errors.password}</p> : null
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center mb-2">
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='name' id="name" label="Name*" variant="outlined" />
                                    {
                                        formik.errors.name && formik.touched.name ?
                                            <p className='text-danger'>{formik.errors.name}</p> : null
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center mb-2">
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='address' id="address" label="Address" variant="outlined" />
                                    {
                                        formik.errors.address && formik.touched.address ?
                                            <p className='text-danger'>{formik.errors.address}</p> : null
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center mb-2">
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='phone' id="phone" label="Mobile number*" variant="outlined" />
                                    {
                                        formik.errors.phone && formik.touched.phone ?
                                            <p className='text-danger'>{formik.errors.phone}</p> : null
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center mb-2">
                                    <TextField onBlur={formik.handleBlur} onChange={formik.handleChange} name='account' id="account" label="Account number*" variant="outlined" />
                                    {
                                        formik.errors.account && formik.touched.account ?
                                            <p className='text-danger'>{formik.errors.account}</p> : null
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center mb-4">
                                    <Button type='submit' variant="contained" id="mainbutton1">Register</Button>
                                </div>
                            </div>

                        </form>

                    </div>
                    <br></br>
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="Registered Successfully"
                        action={action}
                    />
                </div>
            </div>
        </div>
    )
}

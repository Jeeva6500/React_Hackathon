import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import CloseIcon from '@mui/icons-material/Close'

export default function Login() {

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [err, setErr] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
    
    navigate('/dashboard')
    window.location.reload();
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
      password: ''
    },
    onSubmit: values => {
      axios.post('http://localhost:8080/login',values)
        .then(res => {
          setOpen(true)
          console.log(res);
          
          localStorage.setItem('mytoken',res.data.token);
          localStorage.setItem('username', res.data.username)
          
          

        })
        .catch(error => setError(error.message))
    },
    validationSchema: yup.object().shape({
      username: yup.string().email('Enter the valid email Id').required('Field cannot be blank'),
      password: yup.string().required('Field cannot be blank')

    })
  })
  return (
    <div className='container mt-4'>
      <div className="row">
        <div className="col-md-4 offset-md-4 mb-4">
          <div className='card'>
            <div className="text-white  mb-2 p-2 rounded text-center" style={{ background: "indigo" }}>
              <h4>Login</h4>
            </div>
            <span className='text-center text-danger'>{err}</span>
            {
              error != '' ? <span className="text-center text-danger">Invalid credentials!</span> : <span></span>
            }
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col text-center mb-2 mt-4">


                  {
                    formik.errors.username && formik.touched.username ?
                      <TextField onBlur={formik.handleBlur} onChange={formik.handleChange}
                        name='username' id="username" error
                        label="Username*"
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

                      <p className='text-danger me-4'>{formik.errors.password}</p> : null
                  }
                </div>
              </div>
              <div className="row">
                <div className="col text-center mb-4">
                  <Button type='submit' variant="contained" id= "mainbutton1">Login</Button>
                </div>
              </div>
            </form>
          </div>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Login success"
            action={action}
          />
        </div>
      </div>
    </div>
  )
}


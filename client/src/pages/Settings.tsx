import { Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Settings = () => {
  return (
    <Container>

       <div>
        <Typography>Username</Typography>
       <TextField/>
        </div>
       
        <div>
        <Typography>Password</Typography>
       <TextField/>
        </div>
    </Container>
  )
}

export default Settings
'use client'
import { Istudent } from '@/interfaces/Istudent'
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { addStudent, getData } from '@/services/student.service'
import { useDispatch } from 'react-redux'
import { changeStudents } from '@/redux/studentSlice';
import { Alert, Snackbar } from '@mui/material'

interface props {
    setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
}
const AddStudent = ({ setToggleForm }: props) => {
    const [student, setStudent] = useState<Istudent>({ birthday: '', email: '', firstName: '', lastName: '' })
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const OnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStudent({ ...student, [name]: value })
    }

    const OnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addStudent(student).then(async () => {
            const stds = await getData()
            dispatch(changeStudents(stds))
        }).then(() => {
            setToggleForm(false)
        }).catch(() => {
            setOpen(true)
        })
    }
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (<>
        <form onSubmit={OnSubmit}>
            <TextField required onChange={OnChange} name='firstName' variant="outlined" placeholder='first name' />
            <TextField required onChange={OnChange} name='lastName' variant="outlined" placeholder='Last name' />
            <TextField type='date' required onChange={OnChange} name='birthday' variant="outlined" placeholder='Birthday' />
            <TextField required onChange={OnChange} name='email' variant="outlined" placeholder='email' />

            <Button variant='contained' type='submit' >Add</Button>
            <Button onClick={() => setToggleForm(false)} variant='contained' color='error' type='submit' >Cancel</Button>
        </form>
        <Snackbar onClose={handleClose} open={open} autoHideDuration={3000} >
            <Alert severity="error" sx={{ width: '100%' }}>
                Error!! please try again
            </Alert>
        </Snackbar>
    </>)
}

export default AddStudent
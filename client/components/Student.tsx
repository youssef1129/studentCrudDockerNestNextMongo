'use client'
import { Istudent } from '@/interfaces/Istudent'
import { TextField, IconButton, Button } from '@mui/material'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { BsPen, BsTrash2, BsSave } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { changeStudents } from '@/redux/studentSlice';
import { getData, deleteStudent, updateStudent } from '@/services/student.service';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Alert, Snackbar } from '@mui/material'

interface props {
    student: Istudent
}

const Student = ({ student }: props) => {
    const [isModif, setIsModif] = useState(false)
    const [std, setStudent] = useState({ birthday: '', email: '', firstName: '', lastName: '' })
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);


    const save = async () => {
        await updateStudent(student._id!, std).then(async () => {
            const stds = await getData()
            dispatch(changeStudents(stds))
        }).then(() => {
            setIsModif(false)
        }).catch(() => {
            setOpen(true)
        })
    }

    const OnDelete = async () => {
        await deleteStudent(student._id!).then(async () => {
            const stds = await getData()
            dispatch(changeStudents(stds))
        })
    }

    const OnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setStudent({ ...std, [name]: value })
    }

    useEffect(() => {
        setStudent(student)
    }, [])

    const getAge = (dateString: string) => {
        var ageDifMs = Date.now() - new Date(dateString).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (<>
        <TableRow key={student._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <TextField onChange={OnChange} name='firstName' disabled={!isModif} variant="standard" value={std.firstName} />
                <TextField onChange={OnChange} name='lastName' disabled={!isModif} variant="standard" value={std.lastName} />
            </TableCell>
            <TableCell align="right">
                {
                    isModif ?
                        <TextField type='date' onChange={OnChange} name='birthday' variant="standard" value={std.birthday} />
                        :
                        <TextField disabled variant="standard" value={getAge(std.birthday)} />
                }
            </TableCell>
            <TableCell align="right">
                <TextField onChange={OnChange} name='email' disabled={!isModif} variant="standard" value={std.email} />
            </TableCell>
            <TableCell align="right">
                {isModif ?
                    <Button color='secondary' variant="outlined" onClick={save}><BsSave /></Button> :
                    <Button color='success' variant="outlined" onClick={() => setIsModif(true)} ><BsPen /></Button>
                }
                <Button color='error' variant="outlined" onClick={() => OnDelete()}>
                    <BsTrash2 />
                </Button>
            </TableCell>
        </TableRow>
        <Snackbar onClose={handleClose} open={open} autoHideDuration={3000} >
            <Alert severity="error" sx={{ width: '100%' }}>
                Error!! please try again
            </Alert>
        </Snackbar>
    </>
        // <tr key={student.email}>
        //     <td>
        //         <TextField onChange={OnChange} name='firstName' disabled={!isModif} variant="standard" value={std.firstName} />
        //         <TextField onChange={OnChange} name='lastName' disabled={!isModif} variant="standard" value={std.lastName} />
        //     </td>
        //     <td>
        //         <TextField onChange={OnChange} name='birthday' disabled={!isModif} variant="standard" value={std.birthday} />
        //     </td>
        //     <td>
        //         <TextField onChange={OnChange} name='email' disabled={!isModif} variant="standard" value={std.email} />
        //     </td>
        //     <td>
        //         {isModif ?
        //             <IconButton color='secondary' variant="outlined" onClick={save}><BsSave /></IconButton> :
        //             <IconButton color='success' variant="outlined" onClick={() => setIsModif(true)} ><BsPen /></IconButton>
        //         }
        //         <IconButton color='error' variant="outlined" onClick={() => OnDelete()}>
        //             <BsTrash2 />
        //         </IconButton>
        //     </td>
        // </tr>
    )
}

export default Student
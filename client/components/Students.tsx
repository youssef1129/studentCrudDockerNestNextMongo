'use client'

import { Istudent } from '@/interfaces/Istudent';
import React, { useEffect } from 'react'
import Student from './Student'
import { useSelector, useDispatch } from 'react-redux'
import { changeStudents } from '@/redux/studentSlice';
import { getData } from '@/services/student.service';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Students() {
  const students = useSelector((state: any) => state.value)
  const dispatch = useDispatch()

  const setData = async () => {
    const stds = await getData()
    dispatch(changeStudents(stds))
  }

  useEffect(() => {
    setData()
  }, [])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((s: Istudent) => (
            <Student key={s._id} student={s} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Full Name</th>
    //       <th>Age</th>
    //       <th>Email</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {
    //       students.map((s: Istudent) => {
    //         return (
    //           <Student key={s._id} student={s} />
    //         )
    //       })
    //     }

    //   </tbody>

    // </table>
  )
}
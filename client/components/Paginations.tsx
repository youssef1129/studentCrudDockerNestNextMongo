'use client'

import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { getCountStudents, getData } from '@/services/student.service';
import { changeStudents } from '@/redux/studentSlice';

interface props {
    count: number;
    pages: number;
}

export const Paginations = () => {
    const students = useSelector((state: any) => state.value)
    const dispatch = useDispatch()
    const [count, setCount] = useState<props>({ count: 0, pages: 0 })
    const [page, setPage] = React.useState(1);

    const setCountStudents = async () => {
        const c = await getCountStudents()
        setCount(c)
    }
    useEffect(() => {
        setCountStudents()
    }, [students])


    const handleChangePage = (
        event: any,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const onPageChanged = async () => {
        const stds = await getData((page - 1) * 4)
        dispatch(changeStudents(stds))
    }

    useEffect(() => {
        onPageChanged()
    }, [page])

    return (
        <div className='pg'>
            <Pagination count={count.pages} color="primary"
                page={page}
                onChange={handleChangePage}
            />
        </div>
    )
}


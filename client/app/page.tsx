'use client'
import AddStudent from "@/components/AddStudent";
import Students from "../components/Students";
import { useState } from 'react'
import { SearchComp } from "@/components/SearchComp";
import { Button } from '@mui/material'
import { Paginations } from '../components/Paginations'
export default function Home() {
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <main>
      {toggleForm && <div className='form'>
        <AddStudent setToggleForm={setToggleForm} />
      </div>
      }
      <div className='cnt'>
        <SearchComp />
        <Button onClick={() => setToggleForm(true)} color='success' variant='contained'>Add Student</Button>
      </div>
      {/* @ts-ignore */}
      <Students />
      <Paginations />
    </main>
  )
}
